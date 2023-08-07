import axios from 'axios'

const host = process.env.MOCKFLY_BACKEND_HOST

class Mockfly {
  evaluationKey = ''
  environment = ''
  authHeader = ''

  constructor(props) {
    this.environment = props?.environment
    this.authHeader = props?.authHeader
  }

  identify = value => {
    this.evaluationKey = value
  }

  getFlag = async key => {
    if (!this.authHeader) {
      throw new Error('You must add the authHeader in constructor when create the mockfly object.')
    }

    if (!key) {
      throw new Error('Key cannot be null. Please, set a key when call to mockfly.getFlag(key).')
    }

    if (this.evaluationKey) {
      const response = await axios.post(`${host}/flags/evaluate`, {
        keyFlag: key,
        environment: this.environment,
        evaluationKey: this.evaluationKey,
      })
      return response.data
    } else {
      throw new Error('You must identify a user before get a flag. You can use mockfly.identify(value) function.')
    }
  }
}

export default Mockfly
