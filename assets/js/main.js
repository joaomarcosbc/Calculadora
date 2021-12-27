function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        
        
        inicia: function() {
            this.cliqueBotoes()
            this.pressEnter()
            this.pressDelete()
        },

        pressDelete: function() {
            this.display.addEventListener('keydown', (e) => {
                if (e.keyCode === 8) {
                    e.preventDefault()
                    this.deleteOne()
                }
            })
        },

        pressEnter: function() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.equal()
                }
            })
        },


        cliqueBotoes: function() {
            document.addEventListener('click', (e) => {
                const el = e.target

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-delete')) {
                    this.deleteOne()
                }

                if(el.classList.contains('btn-eq')) {
                    this.equal()
                }
            })
        },

        btnParaDisplay: function(valor) {
            this.display.value += valor
        },

        clearDisplay: function() {
            this.display.value = ''
        },
        
        deleteOne: function() {
            this.display.value = this.display.value.slice(0, -1)
        },

        equal: function() {
            let conta = this.display.value
            try {
                conta = eval(conta)

                if(!conta) {
                    alert('Conta Inválida')
                    this.clearDisplay()
                    return
                }

                this.display.value = conta

            } catch(e) {
                alert('Conta Inválida')
                this.clearDisplay()
                return
            }
        }

    }
}

const calculadora = criaCalculadora()
calculadora.inicia()