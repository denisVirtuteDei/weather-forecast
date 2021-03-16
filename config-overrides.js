const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@utils': 'src/utils',
        '@themes': 'src/theme', 
        '@actions': 'src/actions',
        '@constants': 'src/constants',
        '@blocks': 'src/components/blocks',
        '@globalStyles': 'src/globalStyles',
        '@wrappers': 'src/components/wrappers',
        '@axiosServices': 'src/services/axiosRequests',
    })(config)

    return config
}