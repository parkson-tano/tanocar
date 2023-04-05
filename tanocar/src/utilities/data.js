export const fuel_type = [
    { key: 'diesel', value: 'Diesel' },
    { key: 'petrol', value: 'Petrol' },
    { key: 'electric', value: 'Electric' },
]

export const transmission_type = [
    { key: 'manual', value: 'Manual' },
    { key: 'automatic', value: 'Automatic' },
]

export const drive_type = [
    { key: 'fwd', value: 'Front-wheel drive' },
    { key: 'rwd', value: 'Rear-wheel drive' },
    { key: 'awd', value: 'All-wheel drive' },
    { key: '4wd', value: 'Four-wheel drive' },
]

export const condition_type = [
    { key: 'new', value: 'New' },
    { key: 'used', value: 'Used' },

]

export const color_type = [
    { key: 'black', value: 'Black' },
    { key: 'white', value: 'White' },
    { key: 'red', value: 'Red' },
    { key: 'blue', value: 'Blue' },
    { key: 'green', value: 'Green' },
    { key: 'yellow', value: 'Yellow' },
    { key: 'silver', value: 'Silver' },
    { key: 'grey', value: 'Grey' },
    { key: 'brown', value: 'Brown' },
    { key: 'orange', value: 'Orange' },
    { key: 'purple', value: 'Purple' },
    { key: 'pink', value: 'Pink' },
    { key: 'gold', value: 'Gold' },
    { key: 'beige', value: 'Beige' },
    { key: 'other', value: 'Other' },
]

export const engine_type = [
    { key: 'v4', value: 'V4' },
    { key: 'v6', value: 'V6' },
    { key: 'v8', value: 'V8' },
    { key: 'v10', value: 'V10' },
    { key: 'v12', value: 'V12' },
    { key: 'v16', value: 'V16' },
    { key: 'rotary', value: 'Rotary' },
    { key: 'wankel', value: 'Wankel' },
    { key: 'electric', value: 'Electric' },
    { key: 'other', value: 'Other' },
]

export const body_type = [
    { key: 'sedan', value: 'Sedan' },
    { key: 'coupe', value: 'Coupe' },
    { key: 'hatchback', value: 'Hatchback' },
    { key: 'wagon', value: 'Wagon' },
    { key: 'convertible', value: 'Convertible' },
    { key: 'suv', value: 'SUV' },
    { key: 'crossover', value: 'Crossover' },
    { key: 'minivan', value: 'Minivan' },
    { key: 'pickup', value: 'Pickup' },
    { key: 'van', value: 'Van' },
    { key: 'other', value: 'Other' },

]

export const doors_type = [
    { key: '2', value: '2' },
    { key: '3', value: '3' },
    { key: '4', value: '4' },
    { key: '5', value: '5' },
    { key: '6', value: '6' },
]

export const cylinders_type = [
    { key: '2', value: '2' },
    { key: '3', value: '3' },
    { key: '4', value: '4' },
    { key: '5', value: '5' },
    { key: '6', value: '6' },
    { key: '8', value: '8' },
    { key: '10', value: '10' },
    { key: '12', value: '12' },
    { key: '16', value: '16' },
    { key: '20', value: '20' },
]

export const fuel_economy_type = [
    { key: 'city', value: 'City' },
    { key: 'highway', value: 'Highway' },
    { key: 'combined', value: 'Combined' },

]

export const fuel_economy_unit_type = [
    { key: 'mpg', value: 'MPG' },
    { key: 'l/100km', value: 'L/100km' },

]

export const mileage_unit_type = [
    { key: 'km', value: 'KM' },
    { key: 'mi', value: 'MI' },
]


export const car_feature = [
    { key: 'air_conditioning', value: 'Air Conditioning' },
    { key: 'alarm_system', value: 'Alarm System' },
    { key: 'alloy_wheels', value: 'Alloy Wheels' },
    { key: 'anti_lock_braking_system', value: 'Anti-lock Braking System' },
    { key: 'automatic_headlights', value: 'Automatic Headlights' },
    { key: 'bluetooth', value: 'Bluetooth' },
    { key: 'cd_player', value: 'CD Player' },
    { key: 'cruise_control', value: 'Cruise Control' },
    { key: 'dvd_player', value: 'DVD Player' },
    { key: 'electric_seats', value: 'Electric Seats' },
    { key: 'electric_windows', value: 'Electric Windows' },
    { key: 'fog_lights', value: 'Fog Lights' },
    { key: 'heated_seats', value: 'Heated Seats' },
    { key: 'heated_steering_wheel', value: 'Heated Steering Wheel' },
    { key: 'keyless_entry', value: 'Keyless Entry' },
    { key: 'leather_seats', value: 'Leather Seats' },
    { key: 'navigation_system', value: 'Navigation System' },
    { key: 'parking_sensors', value: 'Parking Sensors' },
    { key: 'power_steering', value: 'Power Steering' },
    { key: 'power_sunroof', value: 'Power Sunroof' },
    { key: 'power_windows', value: 'Power Windows' },
    { key: 'premium_sound_system', value: 'Premium Sound System' },
    { key: 'rear_view_camera', value: 'Rear View Camera' },
    { key: 'remote_start', value: 'Remote Start' },
    { key: 'satellite_radio', value: 'Satellite Radio' },
    { key: 'side_airbags', value: 'Side Airbags' },
    { key: 'stability_control', value: 'Stability Control' },
    { key: 'sunroof', value: 'Sunroof' },
    { key: 'tinted_windows', value: 'Tinted Windows' },
    { key: 'tire_pressure_monitoring_system', value: 'Tire Pressure Monitoring System' },
    { key: 'traction_control', value: 'Traction Control' },
    { key: 'trip_computer', value: 'Trip Computer' },
    { key: 'usb_input', value: 'USB Input' },
    { key: 'xenon_headlights', value: 'Xenon Headlights' },

]

const yea = Array.from(Array(24), (_, index) => index + 2000);

const years = yea.map(year => {
    return {
        key: year ,
        value: year }

}); 

export const year_type = years;