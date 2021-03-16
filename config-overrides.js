const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@': 'src',
        '@utils': 'src/utils',
        '@actions': 'src/actions',
        '@services': 'src/services',
        '@blocks': 'src/components/blocks',
        '@wrappers': 'src/components/wrappers',
    })(config)

    return config
}