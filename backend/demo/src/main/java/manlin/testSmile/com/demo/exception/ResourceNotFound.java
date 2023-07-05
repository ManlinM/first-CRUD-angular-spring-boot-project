package manlin.testSmile.com.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)//when the resource not found, api will return this
public class ResourceNotFound extends RuntimeException {//when resource not exist in a database
    private static final long serialVesionUID =1L;
    public ResourceNotFound(String message){
        /*
        * the super(message) statement is often used to pass an error message to the parent exception class,
        *  allowing it to handle or propagate the exception with the specified message
        * */
        super(message);

    }
}
