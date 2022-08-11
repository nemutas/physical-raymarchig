struct Sphere {
  vec3 position;
  float radius;
};
struct Texture {
  sampler2D texture;
  vec2 uvScale;
};

uniform Sphere u_spheres[AMOUNT];
uniform float u_aspect;
uniform float u_camPosZ;
uniform Texture u_image;
uniform sampler2D u_matcap;
uniform float u_opacity;
varying vec2 v_uv;

#include '../../scripts/glsl/color/fresnel.glsl'
#include '../../scripts/glsl/color/matcap.glsl'
#include '../../scripts/glsl/color/convert.glsl'
#include '../../scripts/glsl/raymarching/combinations.glsl'
#include '../../scripts/glsl/raymarching/primitives.glsl'

float sdf(vec3 p) {
  float final = sdSphere(p - u_spheres[0].position, u_spheres[0].radius);

  for(int i = 1; i < AMOUNT; i++) {
    float sphere = sdSphere(p - u_spheres[i].position, u_spheres[i].radius);

    vec3 pos = p - u_spheres[i].position;
    float len = length(pos);
    float scale = 1.0 - smoothstep(0.0, 2.0, len);
    scale = scale * (0.8 - 0.5) + 0.5;

    final = opSmoothUnion(final, sphere, scale);
  }

  return final;
}

#include '../../scripts/glsl/raymarching/normal.glsl'

void main() {
  vec2 centeredUV = (v_uv - 0.5) * vec2(u_aspect, 1.0);
  vec3 ray = normalize(vec3(centeredUV, -1.0));
  
  vec3 camPos = vec3(0.0, 0.0, u_camPosZ);
  vec3 rayPos = camPos;
  float totalDist = 0.0;
  float tMax = u_camPosZ + 2.0;

  for(int i = 0; i < 128; i++) {
    float dist = sdf(rayPos);
    if (abs(dist) < 0.002 || tMax < totalDist) break;
    totalDist += dist;
    rayPos = camPos + totalDist * ray;
  }

  vec2 uv = (v_uv - 0.5) * u_image.uvScale + 0.5;
  vec4 t = texture2D(u_image.texture, uv);
  float gray = (t.r + t.g + t.b) / 3.0;
  vec4 color = vec4(vec3(gray), u_opacity);

  if(totalDist < tMax) {
    vec3 normal = calcNormal(rayPos);
    float f = fresnel(ray, normal);

    vec2 matcapUv = matcap(ray, normal);
    vec4 _matcap = texture2D(u_matcap, matcapUv);

    vec3 hsv = rgb2hsv(_matcap.rgb);
    hsv.g = 0.0;
    vec3 rgb = hsv2rgb(hsv);

    vec4 tex = texture2D(u_image.texture, uv + normal.xy * 0.05);

    color = tex;
    color.rgb += rgb;
    color.rgb += f * 0.7;
  }

  gl_FragColor = color;
}