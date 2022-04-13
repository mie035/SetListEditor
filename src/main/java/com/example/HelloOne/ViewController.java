package com.example.HelloOne;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("/wow")
    private String showWow() {
        return "/index.html";
    }
}
