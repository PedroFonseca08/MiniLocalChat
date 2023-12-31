package com.GrupoSD.backend.controllers;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.GrupoSD.backend.models.Conversa;
import com.GrupoSD.backend.services.ConversaService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/conversa")
@Validated
public class ConversaController {
    
    @Autowired
    private ConversaService conversaService;

    @GetMapping("/{id}")
    public ResponseEntity<List<ConversaAndID>> encontrarTodasDoUsuario(@PathVariable Integer id) {
        List<Conversa> conversas = this.conversaService.encontrarConversasPorUsuario(id);
        List<ConversaAndID> conversasUsuario = new ArrayList<>();
        ArrayList<Integer> idsAux = new ArrayList<>();

        for (Conversa conversa : conversas) {
            
            if (!idsAux.contains(conversa.getIdConversa())) {
                ConversaAndID conversaDto = new ConversaAndID();
                conversaDto.setPrimeiraPergunta(conversa.getPergunta()); 
                conversaDto.setId(conversa.getIdConversa()); 
                idsAux.add(conversa.getIdConversa());
                conversasUsuario.add(conversaDto);
            }
        }
    
        return ResponseEntity.ok(conversasUsuario);
    }
    

    @GetMapping("/{idU}/{idC}")
    public ResponseEntity<List<Conversa>> encontrarTodasDaConversa(@PathVariable Integer idU, @PathVariable Integer idC){
        List<Conversa> historico = this.conversaService.encontrarHistoricoConversa(idU, idC);

        return ResponseEntity.ok(historico);
    }
    
    @PostMapping
    @Validated
    public ResponseEntity<String> criarConversa(@Valid @RequestBody Conversa objConversa) {
        this.conversaService.criarConversa(objConversa);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}").buildAndExpand(objConversa.getIdUsuario()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @GetMapping("/proximoId/{idU}")
    public ResponseEntity<Integer> obterProximoIdConversa(@PathVariable Integer idU) {
        Integer proximoId = this.conversaService.obterProximoIdConversa(idU);
        return ResponseEntity.ok(proximoId);
    }

}
