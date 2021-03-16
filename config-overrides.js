const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@': 'src',
        '@utils': 'src/utils',
        '@actions': 'src/actions',
        '@services': 'src/services',
        '@pages': 'src/components/pages',
        '@blocks': 'src/components/blocks',
        '@controls': 'src/components/controls',
        '@wrappers': 'src/components/wrappers',
    })(config)

    return config
}