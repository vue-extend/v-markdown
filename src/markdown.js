const markdown = require("markdown-it")
const md = new markdown()

function directive(Vue, options) {
    Vue.directive("markdown", {
        bind: (el, binding, vnode) => {
            let data = binding.value;
            el.innerHTML = md.render(data);
        },
        update: (el, binding, vnode) => {
            let data = binding.value;
            el.innerHTML = md.render(data);
        }
    })
}

const install = (Vue, options) => {
    directive(Vue, options)
}

module.exports = exports = install;