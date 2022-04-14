package com.example.HelloOne.Communication;

import java.util.List;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class SetListController {
    @MessageMapping("/getSetlists")
    @SendTo("/topic/SetLists")
    public List<SetList> setlist(Object m) throws Exception {
      Thread.sleep(1000); // simulated delay
      System.out.println(String.format("i'm telling setlist...%s", HtmlUtils.htmlEscape(m.toString())));
      return DataMgr.getSetLists();
    }
    @MessageMapping("/getTunes")
    @SendTo("/topic/Tunes")
    public List<Tune> tune(Object m) throws Exception {
      Thread.sleep(1000); // simulated delay
      System.out.println(String.format("i'm telling tune...%s", HtmlUtils.htmlEscape(m.toString())));
      return DataMgr.getTunes();
    }   
}
