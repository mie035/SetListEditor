package com.example.HelloOne.Communication;

import java.util.List;
import java.util.Collections;

public class SetList {
    private int Id;
    private String Name;
    private List<Integer> TunesIds;

    public SetList(String name, int id, List<Integer> tunePathList) {
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
    public List<Integer> getTuneIds()
    {
        final List<Integer> lst = Collections.unmodifiableList(TunesIds);
        return lst;
    }
    public void setTuneIds(List<Integer> tuneIdList)
    {
        TunesIds = tuneIdList;
    }
    public void addFilePath(Integer tuneId)
    {
        TunesIds.add(tuneId);
    }
    public void removeFilePath(Integer tuneId)
    {
        if(TunesIds.contains(tuneId))
        {
            TunesIds.remove(tuneId);
        }
    }
}
