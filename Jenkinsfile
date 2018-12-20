pcfNpmPipeline() {
  nexus = [
    group: "com.cengage.rgu"
  ]
  hugo = [
    buildDir: "public",
    scripts: [
      build: "hugo",
    ]
  ]
  deployments = [
    dev: [[
      id: 'gale-styles',
      pcf_org: 'ux'
    ]]
  ]
}
