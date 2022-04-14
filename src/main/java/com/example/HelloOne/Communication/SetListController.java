package com.example.HelloOne.Communication;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class SetListController {
    @MessageMapping("/getSetlist")
    @SendTo("/topic/SetLists")
    public Greeting greeting(SetList message) throws Exception {
      Thread.sleep(1000); // simulated delay
      return new Greeting("Hello babe, " + HtmlUtils.htmlEscape(message.getName()) + "!");
    }   
}
