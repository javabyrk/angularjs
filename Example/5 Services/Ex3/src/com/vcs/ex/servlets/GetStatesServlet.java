package com.vcs.ex.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class GetStatesServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		ArrayList<String> list = null;

		String country = request.getParameter("country");

		String states = "";

		if (country.equals("india"))
			states = "[\"AP\",\"TN\",\"MH\",\"PJ\"]";
		else
			states = "[\"Florida\",\"NewYork\",\"WashingTon\",\"California\"]";

		response.getOutputStream().write(states.getBytes());

	}

}
