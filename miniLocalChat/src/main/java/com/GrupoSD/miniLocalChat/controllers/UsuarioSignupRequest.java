package com.GrupoSD.miniLocalChat.controllers;

import jakarta.validation.constraints.NotBlank;

public class UsuarioSignupRequest {

    @NotBlank
    private String emailUsuario;

    @NotBlank
    private String nomeUsuario;

    @NotBlank
    private String senhaUsuario;

    public String getNomeUsuario() {
        return nomeUsuario;
    }

    public void setnomeUsuario(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    public String getEmailUsuario() {
        return emailUsuario;
    }

    public void setEmailUsuario(String emailUsuario) {
        this.emailUsuario = emailUsuario;
    }

    public String getSenhaUsuario() {
        return senhaUsuario;
    }

    public void setSenhaUsuario(String senhaUsuario) {
        this.senhaUsuario = senhaUsuario;
    }

}
