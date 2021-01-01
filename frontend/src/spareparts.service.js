import http from "./http-common";

class sparepartsDataService{
    getAll(){
        return http.get("/spareparts");
    }

    get(id){
        return http.get(`/spareparts/${id}`);
    }

    create(data){
        return http.post("/spareparts", data);
    }

    update(id, data){
        return http.put(`/spareparts/${id}`, data);
    }

    delete(id){
        return http.delete(`/spareparts/${id}`);
    }

    deleteAll(){
        return http.delete(`/spareparts`);
    }

    find(obj){
        return http.get(`/spareparts?search=${obj}`);
    }
}

export default new sparepartsDataService();