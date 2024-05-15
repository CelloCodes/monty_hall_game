export default function format_position(value) {
    if (value == 1) {
        value += 'st'
    } else if (value == 2) {
        value += 'nd'
    } else if (value == 3) {
        value += 'rd'
    } else {
        value += 'th'
    }
    
    return value
}
