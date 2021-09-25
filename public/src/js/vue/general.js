var cBlock = new Vue({
    data() {
        return {
            empty: true
        }
    },
    methods: {
        getWW: () => { return window.innerWidth },
        setValues: () => {
            if (cBlock.getWW() <= 1000 && cBlock.getWW() > 768) { 
                cBlock.empty = false
            }
            else if (cBlock.getWW() <= 768 && cBlock.getWW() > 320) {
                cBlock.empty = false
            }
            else if (cBlock.getWW() <= 320) { 
                cBlock.empty = false 
            }
            else {
                cBlock.empty = true
            }
        }
    },
    mounted: () => {
        cBlock.setValues()
        window.addEventListener('resize', () => {
            cBlock.setValues()
        });
    }
})

var hBlock = new Vue({
    data() {
        return {
            empty: true
        }
    },
    methods: {
        getWW: cBlock.getWW,
        setValues: () => {
            if (hBlock.getWW() <= 768) {
                hBlock.empty = false
            }
            else {
                hBlock.empty = true
            }
        }
    },
    mounted: () => {
        hBlock.setValues()
        window.addEventListener('resize', () => {
            hBlock.setValues()
        })
    }
})

//mounts
cBlock.$mount('#content-block')
hBlock.$mount('#header')