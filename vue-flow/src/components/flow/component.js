/* @flow */
export default {
  data () {
    return {
      myNumber: Number,
      myString: String
    }
  },

  methods: {

    getMyNumber (): Number {
      return this.myNumber;
    },

    setMyNumber (number: Number): void {
      this.myNumber = number;
    }

  }
}