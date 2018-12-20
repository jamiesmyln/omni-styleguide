pcfNpmPipeline() {
  nexus = [
    group: "com.cengage.rgu"
  ]
  npm = [
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
