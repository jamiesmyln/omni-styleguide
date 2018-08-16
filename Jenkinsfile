pcfNpmPipeline() {
  nexus = [
    group: "com.cengage.rgu"
  ]
  npm = [
    scripts: [
      build: "npm run patternlab build",
    ]
  ]
  buildDir = "public"
  deployments = [
    dev: [[
      id: 'gale-styles',
      pcf_org: 'ux'
    ]]
  ]
}
