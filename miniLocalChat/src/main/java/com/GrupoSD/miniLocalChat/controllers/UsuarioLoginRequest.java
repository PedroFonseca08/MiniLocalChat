package com.GrupoSD.miniLocalChat.controllers;

import jakarta.validation.constraints.NotBlank;

public class UsuarioLoginRequest {

    @NotBlank
    private String emailUsuario;

    @NotBlank
    private String senhaUsuario;


    public String getEmailUsuario() {
        return this.emailUsuario;
    }

    public void setEmailUsuario(String emailUsuario) {
        this.emailUsuario = emailUsuario;
    }

    public String getSenhaUsuario() {
        return this.senhaUsuario;
    }

    public void setSenhaUsuario(String senhaUsuario) {
        this.senhaUsuario = senhaUsuario;
    }
}
