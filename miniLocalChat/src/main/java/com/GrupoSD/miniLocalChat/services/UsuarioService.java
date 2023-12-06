package com.GrupoSD.miniLocalChat.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GrupoSD.miniLocalChat.models.Usuario;
import com.GrupoSD.miniLocalChat.repositories.UsuarioRepositorio;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    public Usuario encontrarPeloId(Integer id) {
        Optional<Usuario> usuario = this.usuarioRepositorio.findById(id);

        return usuario.orElseThrow(() -> new RuntimeException(
                "Usuário não encontrado! ID: " + id + " não encontrado"));
    }

    public Usuario criarUsuario(Usuario objUsuario) {
        objUsuario.setIdUsuario(null);
        objUsuario = this.usuarioRepositorio.save(objUsuario);

        return objUsuario;
    }

    public Usuario autenticarUsuario(String email, String senha) {

        Usuario usuario = usuarioRepositorio.findByEmailUsuarioAndsenhaUsuario(email, senha);

        if (usuario != null) {
            return usuario;
        } else {
            return null;
        }
    }
}
