package com.GrupoSD.backend.controllers;

public class ConversaAndID {

    private Integer id;
    private String primeiraPergunta;


    public ConversaAndID() {
    }


    public ConversaAndID(Integer id, String primeiraPergunta) {
        this.id = id;
        this.primeiraPergunta = primeiraPergunta;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPrimeiraPergunta() {
        return this.primeiraPergunta;
    }

    public void setPrimeiraPergunta(String primeiraPergunta) {
        this.primeiraPergunta = primeiraPergunta;
    }

}
