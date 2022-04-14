package com.example.HelloOne.Communication;
/**
 * song data class
 */
public class Tune {
    private int Id;
    private String Name;
    private int Time;
    private String Ref;

    public Tune(int id, String name, int time, String ref) {
        this.Id = id;
        this.Name = name;
        this.Time  = time;
        this.Ref = ref;
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
    public int getTime() {
        return Time;
    }

    /**
     * Update Time for the tune
     * @param time is expressed by seconds
     */
    public void setTime(int time) {
         Time = time;
    }
    /**
     * Get audio file path for the tune
     * @return is audio file path
     */
    public String getRef() {
        return Ref;
    }
    /**
     * Update audio file for the tune
     * @param ref is audio file path
     */
    public void setRef(String ref) {
        Ref = ref;
    }
}
