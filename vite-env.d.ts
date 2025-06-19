/// <reference types="vite/client" />

interface ViteTypeOptions {
  // By adding this line, you can make the type of ImportMetaEnv strict
  // to disallow unknown keys.
  // strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_EMAIL_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}