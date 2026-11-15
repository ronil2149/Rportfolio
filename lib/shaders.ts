export const NOISE = /* glsl */ `
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float vnoise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), u.x),
             mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0; float a = 0.5;
  for(int i=0;i<4;i++){ v += a*vnoise(p); p *= 2.03; a *= 0.5; }
  return v;
}`;

export const SKY_VERT = /* glsl */ `
varying vec3 vPos;
void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`;

export const SKY_FRAG = /* glsl */ `
uniform vec3 uSun; uniform vec3 uMid; uniform vec3 uDeep;
varying vec3 vPos;
void main(){
  float h = clamp(normalize(vPos).y * 0.5 + 0.5, 0.0, 1.0);
  vec3 c = mix(uSun, uMid, smoothstep(0.34, 0.52, h));
  c = mix(c, uDeep, smoothstep(0.52, 0.92, h));
  gl_FragColor = vec4(c, 1.0);
}`;

export const FALLS_VERT = /* glsl */ `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`;

export const FALLS_FRAG = /* glsl */ `
${NOISE}
uniform float uTime;
uniform vec3 uWater; uniform vec3 uFoam; uniform vec3 uDeep;
varying vec2 vUv;
void main(){
  float drop = 1.0 - vUv.y;
  // two noise fields at different scales and speeds: real falls do not
  // move as a single sheet, and one scrolling field always looks like one
  float n      = fbm(vec2(vUv.x * 5.0,  vUv.y * 2.6 - uTime * 0.62));
  float streak = fbm(vec2(vUv.x * 26.0, vUv.y * 1.4 - uTime * 0.92));
  vec3 col = mix(uDeep, uWater, smoothstep(0.0, 0.42, drop + n * 0.24));
  col = mix(col, uFoam, smoothstep(0.44, 1.0, drop * 0.72 + streak * 0.55));
  float edge = smoothstep(0.0, 0.16, vUv.x) * (1.0 - smoothstep(0.84, 1.0, vUv.x));
  float a = edge * (0.66 + streak * 0.34);
  a *= smoothstep(0.0, 0.10, vUv.y);
  gl_FragColor = vec4(col, a);
}`;

export const MIST_VERT = /* glsl */ `
attribute float aSeed;
uniform float uTime;
varying float vFade;
void main(){
  vec3 p = position;
  float life = mod(uTime * 2.1 + aSeed, 40.0);
  p.y += life * 1.15;
  p.x += sin(uTime * 0.45 + aSeed) * 5.5;
  p.z += cos(uTime * 0.32 + aSeed * 1.7) * 4.5;
  vFade = (1.0 - life / 40.0) * 0.5;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = clamp((720.0 / max(-mv.z, 1.0)) * (1.2 + aSeed * 0.006), 1.0, 64.0);
  gl_Position = projectionMatrix * mv;
}`;

export const MIST_FRAG = /* glsl */ `
uniform sampler2D uMap; uniform vec3 uTint;
varying float vFade;
void main(){
  vec4 t = texture2D(uMap, gl_PointCoord);
  gl_FragColor = vec4(uTint, t.a * vFade);
}`;

export const LAKE_VERT = /* glsl */ `
uniform float uTime;
varying float vH; varying vec3 vP;
void main(){
  vec3 p = position;
  float w = sin(p.x * 0.028 + uTime * 0.75) * 0.72
          + sin(p.z * 0.041 - uTime * 0.55) * 0.55
          + sin((p.x + p.z) * 0.017 + uTime * 0.34) * 0.85;
  p.y += w; vH = w; vP = p;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`;

export const LAKE_FRAG = /* glsl */ `
uniform vec3 uDeep; uniform vec3 uTeal; uniform vec3 uSun;
varying float vH; varying vec3 vP;
void main(){
  float d = clamp(length(vP.xz) / 900.0, 0.0, 1.0);
  vec3 c = mix(uTeal, uDeep, d * 0.92);
  // a narrow track rather than a wash — dusk lands on water as a band
  float track = exp(-abs(vP.x) / 46.0) * smoothstep(-200.0, 700.0, vP.z);
  c = mix(c, uSun, track * 0.14 + max(vH, 0.0) * track * 0.12);
  c += max(vH, 0.0) * 0.045;
  gl_FragColor = vec4(c, 1.0);
}`;
