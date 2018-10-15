
import EventEmitter from 'events'

import { Component } from 'react'

const bus = Object.assign({},EventEmitter.prototype)

Component.prototype.bus = bus

export default bus