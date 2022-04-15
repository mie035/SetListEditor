package com.example.HelloOne.Communication;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
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
    public static boolean IsExsitTune(String id)
    {
        for (Tune t : m_Tunes) {
            if(t.getId() == t.getId())
            {
                return true;
            }
        }
        return false;
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
    public static void addTune(Tune tune)
    {
        if(tune.getId() == Tune.UNKNOWN_ID)
        {
            tune.setId(UUID.randomUUID().toString());
        }
        m_Tunes.add(tune);
    }

    private static void CreatePsuedoData()
    {
        SetList s1 = new SetList("2022/08/28 no beer one", 1001, new ArrayList<String>(Arrays.asList("103","105")));
        SetList s2 = new SetList("2022/10/11 True North Fest", 1002, new ArrayList<String>(Arrays.asList("103", "104","105")));
        m_SetLists.add(s1);
        m_SetLists.add(s2);
        Tune t1 = new Tune("103", "make it now", 120, "None");
        Tune t2 = new Tune("104", "good boy and bad boy", 120, "wow.jp/www.mp3");
        Tune t3 = new Tune("105", "none og above", 120, "xxx.com/xxx.mp3");
        m_Tunes.add(t1);
        m_Tunes.add(t2);
        m_Tunes.add(t3);
    }
}
