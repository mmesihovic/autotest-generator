const atGeneratorService = (() => {
    var cfg = {
        "id": 1837,
        "name": "Algoritmi i strukture podataka (2016\/2017), Pripremna Zadaca Za Vjezbu 10, zadatak 1",
        "language": "C++",
        "required_compiler": "g++",
        "preferred_compiler": "g++",
        "compiler_features": [
    
        ],
        "compiler_options": "-std=c++11 -O1 -Wall -Wuninitialized -Winit-self -Wfloat-equal -Wno-sign-compare -Werror=implicit-function-declaration -Werror=vla -pedantic -lm -pass-exit-codes",
        "compiler_options_debug": "-std=c++11 -ggdb -lm -pass-exit-codes",
        "compile": "true",
        "run": "false",
        "test": "true",
        "debug": "true",
        "profile": "true",
        "test_specifications": [
            {
                "id": 1838,
                "require_symbols": [
    
                ],
                "replace_symbols": [
    
                ],
                "code": "UsmjereniGraf<bool> *g = new MatricaGraf<bool>(6);\n  g->dodajGranu(0, 1, 2.5);\n  g->dodajGranu(1, 2, 1.2);\n  g->dodajGranu(1, 3, 0.1);\n  g->dodajGranu(3, 3, -4.0);\n  g->dodajGranu(2, 4, 3.14);\n  g->dodajGranu(2, 3, 2.73);\n  g->dodajGranu(3, 5, 1);\n  g->dodajGranu(5, 2, -5.0);\n  for (int i = 0; i < 6; i++)\n    for (int j = 0; j < 6; j++)\n      cout << g->postojiGrana(i, j);\n  delete g;",
                "global_above_main": "",
                "global_top": "",
                "running_params": {
                    "timeout": "10",
                    "vmem": "1000000",
                    "stdin": ""
                },
                "expected": [
                    "010000001100000110000101000000001000"
                ],
                "expected_exception": "false",
                "expected_crash": "false",
                "ignore_whitespace": "false",
                "regex": "false",
                "substring": "false"
            },
            {
                "id": 2032,
                "require_symbols": [
    
                ],
                "replace_symbols": [
    
                ],
                "code": " UsmjereniGraf<bool> *g = new MatricaGraf<bool>(6);\n  g->dodajGranu(0, 1, 2.5);\n  g->dodajGranu(1, 2, 1.2);\n  g->dodajGranu(1, 3, 0.1);\n  g->dodajGranu(3, 3, -4.0);\n  g->dodajGranu(2, 4, 3.14);\n  g->dodajGranu(2, 3, 2.73);\n  g->dodajGranu(3, 5, 1);\n  g->dodajGranu(5, 2, -5.0);\n  g->obrisiGranu(1,2);\n  g->obrisiGranu(3,5);\n  for (int i = 0; i < 6; i++)\n    for (int j = 0; j < 6; j++)\n      cout << g->postojiGrana(i, j);\n  delete g;",
                "global_above_main": "",
                "global_top": "",
                "running_params": {
                    "timeout": "10",
                    "vmem": "1000000",
                    "stdin": ""
                },
                "expected": [
                    "010000000100000110000100000000001000"
                ],
                "expected_exception": "false",
                "expected_crash": "false",
                "ignore_whitespace": "false",
                "regex": "false",
                "substring": "false"
            },
            {
                "id": 2033,
                "require_symbols": [
    
                ],
                "replace_symbols": [
    
                ],
                "code": " UsmjereniGraf<bool> *g = new MatricaGraf<bool>(4);\n  g->dodajGranu(0, 1, 2.5);\n  g->dodajGranu(1, 2, 1.2);\n  g->dodajGranu(1, 3, 0.1);\n  g->dodajGranu(3, 3, -4.0);\n  g->postaviTezinuGrane(1, 2, 0.2);\n  for (int i = 0; i < 4; i++)\n    for (int j = 0; j < 4; j++)\n      if (g->postojiGrana(i,j))\n        cout << \"(\" << i << \",\" << j << \") -> \" << g->dajTezinuGrane(i, j) << \"; \";\n  delete g;",
                "global_above_main": "",
                "global_top": "",
                "running_params": {
                    "timeout": "10",
                    "vmem": "1000000",
                    "stdin": ""
                },
                "expected": [
                    "(0,1) -> 2.5; (1,2) -> 0.2; (1,3) -> 0.1; (3,3) -> -4;"
                ],
                "expected_exception": "false",
                "expected_crash": "false",
                "ignore_whitespace": "false",
                "regex": "false",
                "substring": "false"
            },
            {
                "id": 2034,
                "require_symbols": [
    
                ],
                "replace_symbols": [
    
                ],
                "code": "UsmjereniGraf<std::string> *g = new MatricaGraf<std::string>(4);\n  g->dodajGranu(0, 1, 2.5);\n  g->dodajGranu(1, 2, 1.2);\n  g->dodajGranu(1, 3, 0.1);\n  g->dodajGranu(3, 3, -4.0);\n  g->postaviOznakuGrane(1, 3, \"aa\");\n  for (int i = 0; i < 4; i++)\n    for (int j = 0; j < 4; j++)\n      if (g->postojiGrana(i,j))\n        cout << \"(\" << i << \",\" << j << \") -> '\" << g->dajOznakuGrane(i, j) << \"'; \";\n  delete g;",
                "global_above_main": "#include<string>",
                "global_top": "",
                "running_params": {
                    "timeout": "10",
                    "vmem": "1000000",
                    "stdin": ""
                },
                "expected": [
                    "(0,1) -> ''; (1,2) -> ''; (1,3) -> 'aa'; (3,3) -> '';"
                ],
                "expected_exception": "false",
                "expected_crash": "false",
                "ignore_whitespace": "false",
                "regex": "false",
                "substring": "false"
            },
            {
                "id": 2035,
                "require_symbols": [
    
                ],
                "replace_symbols": [
    
                ],
                "code": " UsmjereniGraf<std::string> *g = new MatricaGraf<std::string>(4);\n  g->postaviOznakuCvora(0,\"a\");\n  g->postaviOznakuCvora(1,\"bcd\");\n  for (int i = 0; i < 4; i++)\n      cout << \"(\" << i << \") -> '\" << g->dajOznakuCvora(i) << \"'; \";\n  delete g;",
                "global_above_main": "#include<string>",
                "global_top": "",
                "running_params": {
                    "timeout": "10",
                    "vmem": "1000000",
                    "stdin": ""
                },
                "expected": [
                    "(0) -> 'a'; (1) -> 'bcd'; (2) -> ''; (3) -> '';"
                ],
                "expected_exception": "false",
                "expected_crash": "false",
                "ignore_whitespace": "false",
                "regex": "false",
                "substring": "false"
            },
            {
                "id": 2036,
                "require_symbols": [
    
                ],
                "replace_symbols": [
    
                ],
                "code": "UsmjereniGraf<std::string> *g = new MatricaGraf<std::string>(4);\n  cout << g->dajCvor(0).dajRedniBroj() << \"; \";\n  g->postaviOznakuCvora(1, \"aaa\");\n  g->dajCvor(2).postaviOznaku(\"bbb\");\n  for (int i = 0; i < 4; i++)\n      cout << \"(\" << i << \") -> '\" << g->dajOznakuCvora(i) << \"','\" << g->dajCvor(i).dajOznaku() << \"'; \";\n  delete g;",
                "global_above_main": "#include<string>",
                "global_top": "",
                "running_params": {
                    "timeout": "10",
                    "vmem": "1000000",
                    "stdin": ""
                },
                "expected": [
                    "0; (0) -> '',''; (1) -> 'aaa','aaa'; (2) -> 'bbb','bbb'; (3) -> '','';"
                ],
                "expected_exception": "false",
                "expected_crash": "false",
                "ignore_whitespace": "false",
                "regex": "false",
                "substring": "false"
            },
            {
                "id": 2037,
                "require_symbols": [
    
                ],
                "replace_symbols": [
    
                ],
                "code": " UsmjereniGraf<std::string> *g = new MatricaGraf<std::string>(4);\n  g->dodajGranu(0, 1, 2.5);\n  g->dodajGranu(1, 2, 1.2);\n  g->dodajGranu(1, 3, 0.1);\n  g->dodajGranu(3, 3, -4.0);\n  g->postaviOznakuGrane(3, 3, \"aa\");\n  g->dajGranu(0,1).postaviOznaku(\"bb\");\n  for (int i = 0; i < 4; i++)\n    for (int j = 0; j < 4; j++)\n      if (g->postojiGrana(i,j))\n        cout << \"(\" << i << \",\" << j << \") -> '\" << g->dajOznakuGrane(i, j) << \"','\" << g->dajGranu(i, j).dajOznaku() << \"'; \";\n  delete g;",
                "global_above_main": "#include<string>",
                "global_top": "",
                "running_params": {
                    "timeout": "10",
                    "vmem": "1000000",
                    "stdin": ""
                },
                "expected": [
                    "(0,1) -> 'bb','bb'; (1,2) -> '',''; (1,3) -> '',''; (3,3) -> 'aa','aa';"
                ],
                "expected_exception": "false",
                "expected_crash": "false",
                "ignore_whitespace": "false",
                "regex": "false",
                "substring": "false"
            },
            {
                "id": 2038,
                "require_symbols": [
    
                ],
                "replace_symbols": [
    
                ],
                "code": " UsmjereniGraf<bool> *g = new MatricaGraf<bool>(6);\n    g->dodajGranu(0, 1, 2.5);\n    g->dodajGranu(1, 0, 1.2);\n    g->dodajGranu(1, 2, 0.1);\n    g->dodajGranu(0, 0, 3.14);\n    for (GranaIterator<bool> iter = g->dajGranePocetak();\n         iter != g->dajGraneKraj(); ++iter)\n      cout << \"(\" << (*iter).dajPolazniCvor().dajRedniBroj() << \",\"\n           << (*iter).dajDolazniCvor().dajRedniBroj() << \") -> \"\n           << (*iter).dajTezinu() << \"; \";\n  delete g;",
                "global_above_main": "",
                "global_top": "",
                "running_params": {
                    "timeout": "10",
                    "vmem": "1000000",
                    "stdin": ""
                },
                "expected": [
                    "(0,0) -> 3.14; (0,1) -> 2.5; (1,0) -> 1.2; (1,2) -> 0.1;",
                    "(0,1) -> 2.5; (0,0) -> 3.14; (1,0) -> 1.2; (1,2) -> 0.1;"
                ],
                "expected_exception": "false",
                "expected_crash": "false",
                "ignore_whitespace": "false",
                "regex": "false",
                "substring": "false"
            },
            {
                "id": 2039,
                "require_symbols": [
    
                ],
                "replace_symbols": [
    
                ],
                "code": "MatricaGraf<bool> g(6);\ng.dodajGranu(0, 1, 0);\ncout << g.postojiGrana(0,1);\ncout << g.postojiGrana(0,2);",
                "global_above_main": "",
                "global_top": "",
                "running_params": {
                    "timeout": "10",
                    "vmem": "1000000",
                    "stdin": ""
                },
                "expected": [
                    "10"
                ],
                "expected_exception": "false",
                "expected_crash": "false",
                "ignore_whitespace": "false",
                "regex": "false",
                "substring": "false"
            }
        ]
    };
    var emptyConfig = {
        "id": null,
        "name": "",
        "language": "",
        "required_compiler": "",
        "preferred_compiler": "",
        "compiler_features": [],
        "compiler_options": "",
        "compiler_options_debug": "",
        "compile": "false",
        "run": "false",
        "test": "false",
        "debug": "false",
        "profile": "false",
        "test_specifications": []
    }

    const getConfigFile = (url, callback) => {
        console.log("GET URL: ", url);
        callback(cfg);
        /*var data;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(xhttp.readystate == 4 && xhttp.status == 200) {
                data = JSON.parse(xhttp.responseText);
            }
            if(xhttp.readystate == 4 && xhttp.status == 404) {
                data = emptyConfig;
            }
            if(xhttp.readystate == 4 && xhttp.status != 200 && xhttp.status != 400) {
                alert("An error occured. Error: " + xhttp.responseText);
            }
            callback(data);
        }
        xhttp.open("GET", url, true);
        xhttp.send();*/
    }

    const saveConfigFile = (file, url) => {
        console.log("POST URL: ", url);
        console.log("Saving .autotest file: ", file);
        /*var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(xhttp.readystate == 4 && xhttp.status == 200) {
                alert("Successfully created and saved .autotest file");
            }
            if(xhttp.readyState == 4 && xhttp.status != 200) {
                alert("An error occured. Error: " + xhttp.responseText);
            }
        }
        xhttp.open("PUT", url, true);
        xhttp.send(file);*/
    }
    return {
        getConfigFile: getConfigFile,
        saveConfigFile: saveConfigFile
    }
})();