import service from ".";

interface rd {

}

export function look(){
    return service({
        url: '/oper',
        method: 'get'
    })
}


