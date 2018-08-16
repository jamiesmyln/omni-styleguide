pcfNpmPipeline() {
  nexus = [
    group: "com.cengage.rgu"
  ]
  npm = [
    buildDir: "public",
    scripts: [
      build: "npm run patternlab build",
    ]
  ]
  deployments = [
    dev: [[
      id: 'gale-styles',
      pcf_org: 'ux'
    ]]
  ]
}
