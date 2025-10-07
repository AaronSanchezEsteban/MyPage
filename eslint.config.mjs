// ESLINT.CONFIG.MJS
import securityPlugin from "eslint-plugin-security";

export default [
  {
    // ARCHIVOS QUE ESLINT VA A ANALIZAR
    files: ["*.js"],

    // PLUGINS QUE VAMOS A USAR
    plugins: {
      security: securityPlugin,
    },

    // REGLAS RECOMENDADAS DE ESLINT Y DEL PLUGIN DE SEGURIDAD
    extends: [
      "eslint:recommended",
      "plugin:security/recommended"
    ],

    // REGLAS ADICIONALES OPCIONALES
    rules: {
      // POR EJEMPLO, MARCAR USO DE CONSOLE COMO ADVERTENCIA
      "no-console": "warn",

      // MARCAR USO DE EVAL COMO ERROR
      "security/detect-eval-with-expression": "error",

      // MARCAR POSIBLES INYECCIONES XSS
      "security/detect-non-literal-fs-filename": "warn"
    },

    // ENTORNO DE EJECUCIÓN
    env: {
      browser: true,  // PORQUE TU JS CORRE EN EL NAVEGADOR
      es2021: true    // PARA USAR SINTAXIS MODERNA
    }
  }
];
