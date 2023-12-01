package com.GrupoSD.miniLocalChat.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.GrupoSD.miniLocalChat.services.UsuarioService;

import jakarta.validation.Valid;

@RequestMapping("/login")
public class LoginController {
    
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<Void> autenticarUsuario(@Valid @RequestBody UsuarioLoginRequest loginRequest) {
        String email = loginRequest.getEmailUsuario();
        String senha = loginRequest.getSenhaUsuario();

        // Autenticar usuário usando o serviço
        if (usuarioService.autenticarUsuario(email, senha)) {
            // Autenticação bem-sucedida
            return ResponseEntity.ok().build();
        } else {
            // Autenticação falhou
            return ResponseEntity.status(401).build(); // Status 401 indica falha na autenticação
        }
    }
}
