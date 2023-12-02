package com.GrupoSD.miniLocalChat.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GrupoSD.miniLocalChat.models.Conversa;
import com.GrupoSD.miniLocalChat.repositories.ConversaRepositorio;

@Service
public class ConversaService {
    
    @Autowired
    private ConversaRepositorio conversaRepositorio;

    public List<Conversa> encontrarConversasPorUsuario(Integer idUsuario) {

        return this.conversaRepositorio.findByIdUsuario(idUsuario);
    }

    public List<Conversa> encontrarHistoricoConversa(Integer idUsuario, Integer idConversa) {

        return this.conversaRepositorio.findByIdUsuarioAndIdConversa(idUsuario, idConversa);       
    }

    public Conversa criarConversa(Conversa obj) {
        
        obj = this.conversaRepositorio.save(obj);
        return obj;
    }

    public Integer obterProximoIdConversa(Integer idUsuario) {
        Integer ultimoId = conversaRepositorio.findMaxIdConversa(idUsuario);

        if (ultimoId == null){
            return 1;
        }
        else{
            return ultimoId + 1;
        }
    }
}
