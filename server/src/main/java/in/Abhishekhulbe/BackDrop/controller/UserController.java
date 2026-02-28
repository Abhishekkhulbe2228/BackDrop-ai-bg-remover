package in.Abhishekhulbe.BackDrop.controller;

import in.Abhishekhulbe.BackDrop.dto.UserDTO;
import in.Abhishekhulbe.BackDrop.response.BackDropResponse;
import in.Abhishekhulbe.BackDrop.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping
    public BackDropResponse createOrUpdate(@RequestBody UserDTO userDTO) {
        try {
            UserDTO user = userService.saveUser(userDTO);
            return BackDropResponse.builder()
                    .success(true)
                    .data(user)
                    .statusCode(HttpStatus.CREATED)
                    .build();
        } catch(Exception exception) {
            return BackDropResponse.builder()
                    .success(false)
                    .data(exception.getMessage())
                    .statusCode(HttpStatus.INTERNAL_SERVER_ERROR)
                    .build();
        }

    }
}
