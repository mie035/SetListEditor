package com.example.HelloOne.Communication;

import java.util.List;
import java.util.Collections;

public class SetList {
    private int Id;
    private String Name;
    private List<String> TunesIds;

    public SetList(String name, int id, List<String> tunePathList) {
        Name = name;
        Id = id;
        TunesIds = tunePathList;
    }
    public int getId() {
        return Id;
    }
    public String getName() {
        return Name;
    }
    public void setName(String name) {
        Name = name;
    }
    /**
     * return file refered list.this is unmodifiableList object.
     * @return
     */
    public List<String> getTuneIds()
    {
        final List<String> lst = Collections.unmodifiableList(TunesIds);
        return lst;
    }
    public void setTuneIds(List<String> tuneIdList)
    {
        TunesIds = tuneIdList;
    }
    public void addFilePath(String tuneId)
    {
        TunesIds.add(tuneId);
    }
    public void removeFilePath(String tuneId)
    {
        if(TunesIds.contains(tuneId))
        {
            TunesIds.remove(tuneId);
        }
    }
}
