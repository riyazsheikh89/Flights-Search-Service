const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req, res ) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: "Successfully created a Flight"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "unable to create a flight!",
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            err: {},
            message: "Successfully fetched the city"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "unable to fetch flights!",
            err: error
        });
    }
}


const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(201).json({
            data: response,
            success: true,
            err: {},
            message: "successfully fetched all flights"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "unable to fetch flights!",
            err: error
        });
    }
}

module.exports = {
    create,
    get,
    getAll
}