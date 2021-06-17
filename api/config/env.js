import express from 'express'
import morgan from 'morgan'

export const setEnvironment = (app) => {
    if(process.env.NODE_ENV !== 'production') {
        setDevEnv(app)
    }else {
        setProdEnv(app)
    }
}

const setDevEnv = (app) => {
    process.env.NODE_ENV = 'development'
    app.use(morgan('common'))
    console.log('nay')
}

const setProdEnv = (app) => {
    process.env.NODE_ENV === 'production'
    console.log('yay')
}