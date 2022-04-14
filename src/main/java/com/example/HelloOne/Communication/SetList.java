package com.example.HelloOne.Communication;

import java.util.List;
import java.util.Collections;

public class SetList {
    private int Id;
    private String Name;
    private List<String> FilePathList;

    public SetList(String name, int id, List<String> filePathList) {
        Name = name;
        Id = id;
        FilePathList = filePathList;
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
    public List<String> getFIlePathList()
    {
        final List<String> lst = Collections.unmodifiableList(FilePathList);
        return lst;
    }
    public void setFilePathList(List<String> filePathList)
    {
        FilePathList = filePathList;
    }
    public void addFilePath(String filePath)
    {
        FilePathList.add(filePath);
    }
    public void removeFilePath(String filePath)
    {
        if(FilePathList.contains(filePath))
        {
            FilePathList.remove(filePath);
        }
    }
}
