package controller;

import model.Contato;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import repository.ContatoRepository;

import java.util.List;

@Controller
@RequestMapping("/contatos")
public class ContatoController {

    @Autowired
    private ContatoRepository contatoRepository;

    @GetMapping("/")
    public String listarContatos(Model model) {
        List<Contato> contatos = contatoRepository.findAll();
        model.addAttribute("contatos", contatos);
        return "contatos/listar";
    }

    @GetMapping("/novo")
    public String novoContatoForm(Model model) {
        model.addAttribute("contato", new Contato());
        return "contatos/formulario";
    }

    @PostMapping("/salvar")
    public String salvarContato(@ModelAttribute("contato") Contato contato) {
        contatoRepository.save(contato);
        return "redirect:/contatos/";
    }

    @GetMapping("/editar/{id}")
    public String editarContatoForm(@PathVariable("id") Long id, Model model) {
        Contato contato = contatoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Contato inválido ID: " + id));
        model.addAttribute("contato", contato);
        return "contatos/formulario";
    }

    @GetMapping("/excluir/{id}")
    public String excluirContato(@PathVariable("id") Long id) {
        contatoRepository.deleteById(id);
        return "redirect:/contatos/";
    }
}
