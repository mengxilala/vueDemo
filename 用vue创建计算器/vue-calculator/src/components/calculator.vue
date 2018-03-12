<template>
    <div class="calculator">
        <button v-on:click="changeModeEvent" class="toggle-button">
            <p v-if="changeMode">Show Advanced Mode &nbsp;&nbsp;&#9864;</p>
            <p v-else>Show Basic Mode &nbsp;&nbsp;&#9862;</p>
        </button>
        <div class="results">
            <input class="input" v-model="current">
        </div>
        <div class="mode" v-if="changeMode">
            <!-- 简易版本计算器 -->
            <button class="button" v-on:click="press">7</button>
            <button class="button" @click="press">8</button>
            <button class="button" @click="press">9</button>
            <button class="button" @click="press">*</button>
            <button class="button" @click="press">&#60;=</button>
            <button class="button" @click="press">C</button>
            <button class="button" @click="press">4</button>
            <button class="button" @click="press($event)">5</button>
            <button class="button" @click="press">6</button>
            <button class="button" @click="press">/</button>
            <button class="button" @click="press">(</button>
            <button class="button" @click="press">)</button>
            <button class="button" @click="press">1</button>
            <button class="button" @click="press">2</button>
            <button class="button" @click="press">3</button>
            <button class="button" @click="press">-</button>
            <button class="button" @click="press">x ²</button>
            <button class="button" @click="press">±</button>
            <button class="button" @click="press">0</button>
            <button class="button" @click="press">.</button>
            <button class="button" @click="press">%</button>
            <button class="button" @click="press">+</button>
            <button class="button equal-sign" @click="press">=</button>
        </div>
        <div class="mode" v-else>
            <!-- 高级版本计算器 -->
            <button class="button" v-on:click="press">sin</button>
            <button class="button" @click="press">cos</button>
            <button class="button" @click="press">tan</button>
            <button class="button" @click="press">x^</button>
            <button class="button" @click="press">&#60;=</button>
            <button class="button" @click="press">C</button>
            <button class="button" @click="press">log</button>
            <button class="button" @click="press">ln</button>
            <button class="button" @click="press">e</button>
            <button class="button" @click="press">∘</button>
            <button class="button" @click="press">rad</button>
            <button class="button" @click="press">√</button>
            <button class="button" @click="press">7</button>
            <button class="button" @click="press">8</button>
            <button class="button" @click="press">9</button>
            <button class="button" @click="press">/</button>
            <button class="button" @click="press">x ²</button>
            <button class="button" @click="press">x !</button>
            <button class="button" @click="press">4</button>
            <button class="button" @click="press">5</button>
            <button class="button" @click="press">6</button>
            <button class="button" @click="press">*</button>
            <button class="button" @click="press">(</button>
            <button class="button" @click="press">)</button>
            <button class="button" @click="press">1</button>
            <button class="button" @click="press">2</button>
            <button class="button" @click="press">3</button>
            <button class="button" @click="press">-</button>
            <button class="button" @click="press">%</button>
            <button class="button" @click="press">±</button>
            <button class="button" @click="press">0</button>
            <button class="button" @click="press">.</button>
            <button class="button" @click="press">&#x003C0;</button>
            <button class="button" @click="press">+</button>
            <button class="button equal-sign" @click="press">=</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Calculator',
        data() {
            return {
                current: '',
                changeMode: true
            }
        },
        methods: {
            press: function (event) {
                //计算器按钮的click事件
                let that = this;
                let key = event.target.textContent;
                if (
                    key != '=' &&
                    key != 'C' &&
                    key != '*' &&
                    key != '/' &&
                    key != '√' &&
                    key != "x ²" &&
                    key != "%" &&
                    key != "<=" &&
                    key != "±" &&
                    key != "sin" &&
                    key != "cos" &&
                    key != "tan" &&
                    key != "log" &&
                    key != "ln" &&
                    key != "x^" &&
                    key != "x !" &&
                    key != "π" &&
                    key != "e" &&
                    key != "rad" &&
                    key != "∘") {

                    that.current += key;
                } else if (key === "=") {
                    if ((that.current).indexOf('^') > -1) {
                        let base = (that.current).slice(0, (that.current).indexOf('^'));
                        let exponent = (that.current).slice((that.current).indexOf('^') + 1);
                        that.current = eval('Math.pow(' + base + ',' + exponent + ')');
                    } else {
                        that.current = eval(that.current);
                    }
                } else if (key === 'C') {
                    that.current = ''
                } else if (key === '*') {
                    that.current += '*'
                } else if (key === '/') {
                    that.current += '/'
                } else if (key === '+') {
                    that.current += '+'
                } else if (key === '-') {
                    that.current += '-'
                } else if (key === '±') {
                    if ((that.current).charAt(0) === '-') {
                        that.current = (that.current).slice(1)
                    } else {
                        that.current = '-' + that.current
                    }
                } else if (key === '<=') {
                    that.current = that.current.substring(0, that.current.length - 1)
                } else if (key === '%') {
                    that.current = that.current / 100
                } else if (key === 'π') {
                    that.current = that.current * Math.PI
                } else if (key === 'x ²') {
                    that.current = eval(that.current * that.current)
                } else if (key === '√') {
                    that.current = Math.sqrt(that.current)
                } else if (key === 'sin') {
                    that.current = Math.sin(that.current)
                } else if (key === 'cos') {
                    that.current = Math.cos(that.current)
                } else if (key === 'tan') {
                    that.current = Math.tan(that.current)
                } else if (key === 'log') {
                    that.current = Math.log10(that.current)
                } else if (key === 'ln') {
                    that.current = Math.log(that.current)
                } else if (key === 'x^') {
                    that.current += '^'
                } else if (key === 'x !') {
                    let number = 1
                    if (that.current === 0) {
                        that.current = '1'
                    } else if (that.current < 0) {
                        that.current = NaN
                    } else {
                        let number = 1
                        for (let i = that.current; i > 0; i--) {
                            number *= i
                        }
                        that.current = number
                    }
                } else if (key === 'e') {
                    that.current = Math.exp(that.current)
                } else if (key === 'rad') {
                    that.current = that.current * (Math.PI / 180)
                } else if (key === '∘') {
                    that.current = that.current * (180 / Math.PI)
                }

            },
            changeModeEvent: function () {
                let _self = this;
                _self.changeMode = !_self.changeMode;
            }
        }
    }
</script>

<style scoped>
    .calculator {
        width: 440px;
        padding: 20px;
        border-radius: 5px;
        margin: 20px auto;
        font-size: 16px;
        background-color: hsl(0, 0%, 20%);
    }

    .input {
        width: 420px;
        height: 50px;
        border-radius: 0px;
        border: 1px solid hsl(0, 0%, 0%);
        background-color: #333333;
        color: #d9d9d9;
        padding: 0 5px 0 5px;
        margin: 0 0px 10px 0px;
        font-size: 30px;
    }

    .input:focus,
    .input:active {
        border-color: #03a9f4;
        box-shadow: 0 0 4px #03A9F4;
        outline: none 0;
    }

    .button {
        margin: 3px;
        width: 63px;
        border: 1px solid hsl(0, 0%, 5%);
        height: 30px;
        border-radius: 4px;
        color: hsl(0, 0%, 85%);
        background-color: hsl(0, 0%, 10%);
        cursor: pointer;
        outline: none;
    }

    .mode {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .equal-sign {
        background-color: hsl(120, 100%, 25%);
        width: 133px;
    }

    .toggle-button {
        border: none;
        background-color: hsl(0, 0%, 20%);
        cursor: pointer;
        outline: none;
        font-size: 1rem;
        color: #fff;
        text-shadow: -1px -1px 0 rgba(0, 0, 0, .35)
    }

    p {
        margin-top: 0;
    }

    button::-moz-focus-inner {
        border-color: transparent;
    }
</style>