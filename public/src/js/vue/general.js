var cBlock = new Vue({
    data() {
        return {
            empty1000: true,
            empty768: true,
            empty320: true
        }
    },
    methods: {
        getWW: () => { return window.innerWidth },
        setValues: () => {
            if (cBlock.getWW() <= 1000 && cBlock.getWW() > 768) { 
                cBlock.empty1000 = false,
                cBlock.empty768 = true,
                cBlock.empty320 = true
            }
            else if (cBlock.getWW() <= 768 && cBlock.getWW() > 320) {
                cBlock.empty1000 = true,
                cBlock.empty768 = false,
                cBlock.empty320 = true
            }
            else if (cBlock.getWW() <= 320) { 
                cBlock.empty1000 = true,
                cBlock.empty768 = true,
                cBlock.empty320 = true 
            }
            else {
                cBlock.empty1000 = true,
                cBlock.empty768 = true,
                cBlock.empty320 = true
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

//mounts
cBlock.$mount('#content-block')