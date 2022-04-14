package com.example.HelloOne;

import java.net.InetAddress;
import java.net.UnknownHostException;

public class Constants {
    private static Constants m_Constants = new Constants();
    private static InetAddress m_ip;
    private Constants()
    {
        try {
            m_ip = InetAddress.getLocalHost();
        } catch (UnknownHostException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    public static Constants GetInstance()
    {
        return m_Constants;
    }
    /**
     * Get server ip address
     * @return IP Address
     */
    public static String GetCurrentIpAddress()
    {
        return m_ip.getHostAddress();
    }
    /**
     * Get Endpoint
     * @return end point port number
     */
    public static int GetEndPointPort()
    {
        return 8080;
    }
}
