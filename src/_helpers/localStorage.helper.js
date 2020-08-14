class LocalStorageHelper {

    static save(data){
        localStorage.setItem("token",data);
    }   

    static validate(){
        return localStorage.getItem("token");
    }

}

export default LocalStorageHelper;