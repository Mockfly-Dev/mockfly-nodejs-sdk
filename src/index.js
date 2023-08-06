import axios from 'axios'

const host = process.env.MOCKFLY_BACKEND_HOST

const Mockfly = function() {
    this.environment = ''
    this.authHeader = ''
    this.evaluationKey = ''


    this.init = ({environment, authHeader}) => {
        this.environment = environment
        this.authHeader = authHeader
    }

    this.identify = value => {
        this.evaluationKey = value
    }


    this.getFlag = async (key) => {
        if (this.evaluationKey) {
            const response = await axios.post(`${host}/flags/evaluate`, { keyFlag: key, environment: this.environment, evaluationKey: this.evaluationKey  })
            return response.data
        } else {
            throw new Error('You must identify a user before get a flag. You can use Mockfly.identify(value) function.')
        }

    }

}

export default Mockfly