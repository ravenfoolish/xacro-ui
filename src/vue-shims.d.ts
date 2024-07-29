// vue-shims.d.ts
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<Record<never, never>, Record<never, never>, any>
  export default component
}
