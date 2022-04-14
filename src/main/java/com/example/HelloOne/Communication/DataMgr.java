package com.example.HelloOne.Communication;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Collections;

public class DataMgr {
    private static DataMgr m_DataMgr = new DataMgr();
    private static List<SetList> m_SetLists;
    private static List<Tune> m_Tunes;
    private DataMgr()
    {
        m_SetLists = new ArrayList<SetList>();
        m_Tunes = new ArrayList<Tune>();
        CreatePsuedoData();
    }
    public static DataMgr GetInstance()
    {
        return m_DataMgr;
    }
    public static List<SetList> getSetLists()
    {
        final List<SetList> lst = Collections.unmodifiableList(m_SetLists);
        return lst;
    }
    public static void setSetLists(List<SetList> setLists)
    {
        m_SetLists = setLists;
    }
    public static List<Tune> getTunes()
    {
        return m_Tunes;
    }
    public static void setTunes(List<Tune> tunes)
    {
        m_Tunes = tunes;
    }

    private static void CreatePsuedoData()
    {
        SetList s1 = new SetList("no beer one", 1001, new ArrayList<String>(Arrays.asList("None")));
        SetList s2 = new SetList("no beer Two", 1002, new ArrayList<String>(Arrays.asList("None")));
        m_SetLists.add(s1);
        m_SetLists.add(s2);
        Tune t1 = new Tune(101, "make it now", 120, "None");
        Tune t2 = new Tune(101, "good boy and bad boy", 120, "wow.jp/www.mp3");
        Tune t3 = new Tune(101, "none og above", 120, "xxx.com/xxx.mp3");
        m_Tunes.add(t1);
        m_Tunes.add(t2);
        m_Tunes.add(t3);
    }
}
