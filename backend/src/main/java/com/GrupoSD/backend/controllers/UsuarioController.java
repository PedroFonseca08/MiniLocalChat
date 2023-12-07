package com.GrupoSD.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.GrupoSD.backend.models.Usuario;
import com.GrupoSD.backend.models.Usuario.CriarUsuario;
import com.GrupoSD.backend.services.UsuarioService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/usuario")
@Validated
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> encontrarPeloId(@PathVariable Integer id) {
        Usuario objUsuario = this.usuarioService.encontrarPeloId(id);

        return ResponseEntity.ok().body(objUsuario);
    }

    @PostMapping
    @Validated(CriarUsuario.class)
    public ResponseEntity<Usuario> criarUsuario(@Valid @RequestBody Usuario objUsuario) {
        this.usuarioService.criarUsuario(objUsuario);

        return ResponseEntity.ok(objUsuario);
    }

    @PostMapping("/login")
    public ResponseEntity<Usuario> autenticarUsuario(@Valid @RequestBody UsuarioLoginRequest loginRequest) {
        String email = loginRequest.getEmailUsuario();
        String senha = loginRequest.getSenhaUsuario();

        Usuario objUsuario = usuarioService.autenticarUsuario(email, senha);
        if (objUsuario != null) {
            return ResponseEntity.ok().body(objUsuario);
        } else {
            return ResponseEntity.status(401).build();
        }
    }
}
