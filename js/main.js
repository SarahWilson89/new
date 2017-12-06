
var id_cart_product = "";
var id_crossell_feed_product = 0;
var id_shop_order_detail = "";
var tablet_device = "";
var webp_support = "";
var dev_mode = "";
var ie_navigator = "";
var default_alterate = 0;
var filter_fabric = false;
var garment_opt = {
    "product_type": "man_shirt",
    "price_detail": {"base": "59.00", "fabric_man_shirt": 0},
    "current": {
        "config": {
            "shirt_neck": 1,
            "shirt_neck_no_interfacing": 0,
            "shirt_neck_buttons": 1,
            "shirt_cuffs": 1,
            "shirt_sleeve": "long",
            "shirt_fit": "fit",
            "shirt_chest_pocket": 0,
            "shirt_chest_pocket_type": 0,
            "shirt_button_close": 3,
            "shirt_pleats": 0,
            "shirt_cut": "classic"
        }, "fabric": {"man_shirt": "699"}, "extras": []
    },
    "errors": [],
    "render_info": {
        "model": 1,
        "size": "400x470:0x0",
        "webview": {"height": 750, "top": -40, "updown": false},
        "viewport": {
            "front": {"base": {"w": 710, "h": 1400}, "man_shirt": {"w": 710, "h": 867, "top": 250}},
            "back": {"base": {"w": 710, "h": 867}, "man_shirt": {"w": 710, "h": 867, "top": 250}},
            "side": {"base": {"w": 710, "h": 867}, "man_shirt": {"w": 710, "h": 867, "top": 250}},
            "folded": {"base": {"w": 710, "h": 1080}, "man_shirt": {"w": 710, "h": 1080, "top": 0}}
        },
        "mobileview": {"height": 200, "top": -37}
    },
    "complex": false,
    "product_parts": null,
    "styles": {
        "casual": {
            "neck_open": 1,
            "view_detail": "outside",
            "inner_sleeve": 0,
            "icon": "c",
            "title_to_show": "business"
        },
        "business": {
            "neck_open": 0,
            "view_detail": "inside",
            "inner_sleeve": 0,
            "icon": "u",
            "title_to_show": "casual"
        },
        "inner_sleeve": {
            "neck_open": "auto",
            "view_detail": "outside",
            "inner_sleeve": 1,
            "icon": "c",
            "title_to_show": "business"
        },
        "neck_open": {
            "neck_open": 1,
            "view_detail": "auto",
            "inner_sleeve": "auto",
            "icon": "c",
            "title_to_show": "business"
        },
        "neck_close": {
            "neck_open": 0,
            "view_detail": "auto",
            "inner_sleeve": "auto",
            "icon": "u",
            "title_to_show": "casual"
        },
        "cuff_open": {
            "neck_open": "auto",
            "view_detail": "auto",
            "inner_sleeve": 1,
            "icon": "auto",
            "title_to_show": "auto"
        },
        "cuff_close": {
            "neck_open": "auto",
            "view_detail": "auto",
            "inner_sleeve": 0,
            "icon": "auto",
            "title_to_show": "auto"
        },
        "shirt_inside": {
            "neck_open": "auto",
            "view_detail": "inside",
            "inner_sleeve": "auto",
            "icon": "auto",
            "title_to_show": "auto"
        },
        "shirt_outside": {
            "neck_open": "auto",
            "view_detail": "outside",
            "inner_sleeve": "auto",
            "icon": "auto",
            "title_to_show": "auto"
        }
    },
    "config": {
        "shirt_neck_combinated": false,
        "shirt_neck": {
            "5": ["disable#config:man_shirt:shirt_neck_no_interfacing"],
            "6": ["disable#config:man_shirt:shirt_neck_options"]
        },
        "shirt_neck_no_interfacing": {"1": ["disable#config:man_shirt:shirt_neck:5,6"]},
        "shirt_neck_buttons": {"2": ["disable#config:man_shirt:shirt_neck:6"]},
        "shirt_cuffs": {
            "6": ["disable#extra:man_shirt:cuffs_fabric:inner"],
            "9": ["disable#extra:man_shirt:cuffs_fabric:inner"]
        },
        "shirt_sleeve": {"short": ["disable#config:man_shirt:shirt_cuffs", "disable#extra:man_shirt:patches", "disable#extra:man_shirt:cuffs_fabric:inner", "disable#extra:man_shirt:cuffs_fabric:outer", "disable#extra:man_shirt:button_holes_threads:cuff"]},
        "shirt_fit": false,
        "shirt_chest_pocket": {"1": ["disable#extra:man_shirt:tuxedo"], "2": ["disable#extra:man_shirt:tuxedo"]},
        "shirt_chest_pocket_type": {
            "1": ["disable#extra:man_shirt:tuxedo"],
            "2": ["disable#extra:man_shirt:tuxedo"],
            "3": ["disable#extra:man_shirt:tuxedo"],
            "4": ["disable#extra:man_shirt:tuxedo"]
        },
        "shirt_button_close": {"1": ["disable#extra:man_shirt:tuxedo"]},
        "shirt_pleats": false,
        "shirt_cut": false
    },
    "fabric": {
        "man_shirt": {
            "fabric_type": "shirt",
            "cuff_code": 1,
            "button_code": 1,
            "hole_code": 107,
            "thread_code": 107,
            "pant_code": 1,
            "price": {
                "category": {
                    "basic_less": 0,
                    "basic_plus": "10.00",
                    "limited": "20.00",
                    "premium": "30.00",
                    "limited_plus": "30.00",
                    "premium_plus": "60.00",
                    "premium_plus_plus": "70.00",
                    "premium_plus_plus_plus": "100.00"
                }
            }
        }
    },
    "extra": {
        "initials": {"extra_type": "initials"},
        "neck_fabric": {"extra_type": "fabrics"},
        "cuffs_fabric": {
            "extra_type": "fabrics",
            "contrast": {"inner": ["disable#config:man_shirt:shirt_cuffs:6,9"]}
        },
        "button_holes_threads": {
            "extra_type": "threads",
            "contrast": {
                "default": ["disable#extra:man_shirt:button_holes_threads:[threads]", "disable#extra:man_shirt:button_holes_threads:[holes]"],
                "all": ["required#extra:man_shirt:button_holes_threads:[threads]", "required#extra:man_shirt:button_holes_threads:[holes]"],
                "cuff": ["required#extra:man_shirt:button_holes_threads:[threads]", "required#extra:man_shirt:button_holes_threads:[holes]"]
            }
        },
        "patches": {"extra_type": "fabrics", "contrast": {"custom": ["disable#config:man_shirt:shirt_sleeve"]}},
        "tuxedo": {
            "extra_type": "standart",
            "contrast": {"1": ["disable#config:man_shirt:shirt_chest_pocket_type", "disable#config:man_shirt:shirt_button_close:1"]}
        }
    },
    "garment_id": 1004
};
var product = "";
var model = "";
var region = "en-us";
var winter_blazer_landing = "no";
var p_style = "";
//var renderGetImages = ;
//var getLayers = ;
var extra_prices = null;
var is_backoffice = 0;
var show_prices_customer = null;
var preview = false;
var return_in_array = false;
var is_backoffice_php = false;
var remarketing = 0;
var web_host = "https://www.hockerty.com";
var load_to_local = "";
var id_feed_product = 0;
var out_of_stock = false;

loadFont('man_shirt');


//INIT CONFIGURE
ready_callbacks.push(function () {
    var garment = new Garment('#garment_form_' + garment_opt.garment_id, garment_opt);
    var current = garment.getCurrentLayers();
    //Generar js at fly

    garment.getLayers = function () {
        return {
            'shirt_body': {'src': 'images/3d/new_man/models/#size#/#view#/'},
            'shirt_body_pants': {'src': 'images/3d/new_man/shirt/#size#/Pants/#pant_code#/#view#/'},
            'shirt': {'src': 'images/3d/new_man/shirt/#size#/#man_shirt#_fabric/#view#/'},
            'ojales': {'src': 'images/3d/new_man/shirt/#size#/Ojales/#hole_code_fabric#/#view#/'},
            'ojales_extra': {'src': 'images/3d/new_man/shirt/#size#/Ojales/#hole_code_extra#/#view#/'},
            'botones': {'src': 'images/3d/new_man/shirt/#size#/Botones/#button_code#/#view#/'},
            'hilos': {'src': 'images/3d/new_man/shirt/#size#/Hilos/#thread_code_fabric#/#view#/'},
            'hilos_extra': {'src': 'images/3d/new_man/shirt/#size#/Hilos/#thread_code_extra#/#view#/'},
            'gemelos': {'src': 'images/3d/new_man/shirt/#size#/Gemelos/1/#view#/'},
            'neck_fabric': {'src': 'images/3d/new_man/shirt/#size#/#neck_fabric_id#_fabric/#view#/'},
            'cuffs_fabric': {'src': 'images/3d/new_man/shirt/#size#/#cuffs_fabric_id#_fabric/#view#/'},
            'patches_fabric': {'src': 'images/3d/new_man/shirt/#size#/#patches_fabric_id#_fabric/#view#/'},
            'pants': {'src': 'images/3d/new_man/shirt/#size#/Pants/#pant_code#/#view#/'},
            'shoes': {'src': 'images/3d/new_man/shirt/#size#/Zapatos/#shoes#/#view#/'},
            'etiquetas': {'src': 'images/3d/new_man/shirt/#size#/Etiquetas/1/#view#/'},
            'sombra': {'src': 'images/3d/new_man/shirt/#size#/Sombras/#view#/'},
            'shirt_winter_lining': {'src': 'images/3d/new_man/shirt/#size#/winter_lining/#winter_lining_id#/#view#/'},
        };
    };

    garment.renderGetImages = function () {
        images = [];
        var config = current['config'];
        var fabric = current['fabric'];
        var extras = (empty(current['extras'])) ? [] : current['extras'];
        var colores_hilos_ojales = {
            '20': 'blue',
            '21': 'yellow',
            '22': 'gold',
            '23': 'pink',
            '26': 'red',
            '27': 'white',
            '28': 'green',
            '29': 'black'
        };
        var extra_button_holes_threads = false;
        var buttonthreads_color = false;
        var buttonholes_color = false;
        var holes_threads_position = false;
        var button_color = false;
        var patches = false;
        src_fab_patches = '/3d/man/shirt/fabric_' + patches + '/front/';
        sleeves = config['shirt_sleeve'];
        fit = config['shirt_fit'];
        switch (config['shirt_neck']) {
            case '1':
                neck = 'classic';
                break;
            case '2':
                neck = 'open';
                break;
            case '3':
                neck = 'long';
                break;
            case '4':
                neck = 'buttons';
                break;
            case '5':
                neck = 'mao';
                break;
            case '6':
                neck = 'tuxedo';
                break;
            case '7':
                neck = 'lady';
                break;
            case '8':
                neck = 'pin';
                break;
            case '9':
                neck = 'open_extreme';
                break;
            case '10':
                neck = 'classic_low';
                break;
            default:
                neck = 'classic';
                break;
        }
        neck_no_interfacing = config['shirt_neck_no_interfacing'];
        neck_buttons = config['shirt_neck_buttons'];
        ;
        switch (config['shirt_cuffs']) {
            case '1':
                cuffs = 'classic';
                cuffs_back = 'squared';
                inner = 'squared';
                num_cuffs_buttons = '1';
                holes_threads = 'squared';
                break;
            case '2':
                cuffs = '2_button';
                cuffs_back = 'squared_2_buttons';
                inner = 'squared';
                num_cuffs_buttons = '2';
                holes_threads = 'squared_2_buttons';
                break;
            case '3':
                cuffs = 'cut';
                cuffs_back = 'cut';
                inner = 'cut';
                num_cuffs_buttons = '1';
                holes_threads = 'cut';
                break;
            case '4':
                cuffs = 'cut_2_buttons';
                cuffs_back = 'cut_2_buttons';
                inner = 'cut';
                num_cuffs_buttons = '2';
                holes_threads = 'cut_2_buttons';
                break;
            case '7':
                cuffs = 'rounded';
                cuffs_back = 'rounded';
                inner = 'rounded';
                num_cuffs_buttons = '1';
                holes_threads = 'rounded';
                break;
            case '8':
                cuffs = 'rounded_2_buttons';
                cuffs_back = 'rounded_2_buttons';
                inner = 'rounded';
                num_cuffs_buttons = '2';
                holes_threads = 'rounded_2_buttons';
                break;
            case '5':
                cuffs = 'squared';
                cuffs_back = 'squared_french_cuff';
                inner = 'squared';
                num_cuffs_buttons = '1';
                holes_threads = 'squared';
                break;
            case '6':
                cuffs = 'squared_2_buttons';
                cuffs_back = 'squared_double_french_cuff';
                inner = 'squared';
                num_cuffs_buttons = '2';
                holes_threads = 'squared_2_buttons';
                break;
            case '9':
                cuffs = 'french';
                cuffs_back = 'rounded_french_cuff';
                inner = 'rounded';
                num_cuffs_buttons = '1';
                holes_threads = 'rounded';
                break;
            case '10':
                cuffs = 'double_french';
                cuffs_back = 'rounded_double_french_cuff';
                inner = 'rounded';
                num_cuffs_buttons = '2';
                holes_threads = 'rounded_2_buttons';
                break;
            default:
                cuffs = 'classic';
                cuffs_back = 'squared';
                inner = 'squared';
                num_cuffs_buttons = '1';
                holes_threads = 'squared';
                break;
        }
        switch (config['shirt_chest_pocket_type']) {
            case '0':
                chest_pocket = 0;
                break;
            case '1':
                chest_pocket = '1+pockets_type_flap';
                break;
            case '2':
                chest_pocket = '1+pockets_type_straight';
                break;
            case '3':
                chest_pocket = '2+pockets_type_flap';
                break;
            case '4':
                chest_pocket = '2+pockets_type_straight';
                break;
            default:
                chest_pocket = 0;
                break;
        }
        switch (config['shirt_button_close']) {
            case '1':
                button_close = 'french';
                break;
            case '2':
                button_close = 'hidden';
                break;
            case '3':
                button_close = 'standard';
                break;
            default:
                button_close = 'standard';
                break;
        }
        switch (config['shirt_cut']) {
            case 'classic':
                cut = 'modern';
                break;
            case 'straight':
                cut = 'straight';
                break;
            default:
                cut = 'modern';
                break;
        }
        switch (config['shirt_pleats']) {
            case '0':
                pleats = 0;
                break;
            case '1':
                pleats = 'box_pleat';
                break;
            case '2':
                pleats = 'side_folds';
                break;
            default:
                pleats = 0;
                break;
        }
        view_detail = current['view_detail'];
        neck_open = current['neck_open'];
        inner_sleeve = current['inner_sleeve'];
        size = current['size'];
        if (!empty(extras['button_holes_threads']['contrast'])) {
            button_holes_threads_pos = extras['button_holes_threads']['contrast'];
        } else {
            button_holes_threads_pos = false;
        }
        if (!empty(extras['button_holes_threads']['threads-color'])) {
            button_threads = extras['button_holes_threads']['threads-color'];
        } else {
            button_threads = false;
        }
        if (!empty(extras['button_holes_threads']['holes-color'])) {
            button_holes = extras['button_holes_threads']['holes-color'];
        } else {
            button_holes = false;
        }
        print_layer_threads = true;
        print_layer_holes = true;
        if (!empty(extras['tuxedo'])) {
            tuxeda = extras['tuxedo'];
            neck_open = false;
        } else {
            tuxeda = false;
        }
        neck_fabric_id = false;
        neck_fabric_pos = false;
        if (!empty(extras['neck_fabric']['fabric_id'])) neck_fabric_id = extras['neck_fabric']['fabric_id'];
        if (neck_fabric_id && !empty(extras['neck_fabric']['contrast'])) neck_fabric_pos = extras['neck_fabric']['contrast'];
        if (neck_fabric_pos == 'default') neck_fabric_pos = false;
        cuff_fabric_id = false;
        cuff_fabric_pos = false;
        if (!empty(extras['cuffs_fabric']['fabric_id'])) cuff_fabric_id = extras['cuffs_fabric']['fabric_id'];
        if (cuff_fabric_id && !empty(extras['cuffs_fabric']['contrast'])) cuff_fabric_pos = extras['cuffs_fabric']['contrast'];
        patches_id = false;
        if (!empty(extras['patches']['fabric_id'])) patches_id = extras['patches']['fabric_id'];
        if (current['view'] != 'folded' && current['view'] != 'sp_neck' && !preview) {
//                console.log(current['model'])
            array_push(images, {
                'layer': 'shirt_body',
                'src': (!empty(current['model']) ? current['model'] + '.png' : 'carlos.png'),
                'zIndex': 100,
                'class': ''
            });
            if (view_detail == 'outside') {
                array_push(images, {
                    'layer': 'shirt_body_pants',
                    'src': 'debajo.png',
                    'zIndex': 101,
                    'class': 'man_pant',
                    'render': false
                });
            }
        }
        if (current['view'] == 'sp_neck') {
            array_push(images, {
                'layer': 'shirt',
                'src': 'base.png',
                'zIndex': 100,
                'class': 'shirt',
                'render': false
            });
        }
        if (current['view'] == 'front' || current['view'] == 'side') {
            fit_layer = 'fit_' + fit + '+button_close_' + button_close;
            if (view_detail == 'outside') {
                fit_layer += '+bottom_cut_' + cut;
            }
            fit_layer += '+' + view_detail;
            array_push(images, {
                'layer': 'shirt',
                'src': fit_layer + '.png',
                'zIndex': 1002,
                'class': 'shirt',
                'render': false
            });
            if (!empty(tuxeda)) {
                array_push(images, {
                    'layer': 'shirt',
                    'src': 'pleats.png',
                    'zIndex': 1010,
                    'class': 'shirt',
                    'render': false
                });
                array_push(images, {
                    'layer': 'shirt',
                    'src': 'neck_contrast_full+necklines_' + neck + '+number_' + neck_buttons + '+button_close_standard' + '.png',
                    'zIndex': 1020,
                    'class': 'shirt',
                    'render': false
                });
            }
            if (current['view'] == 'front') {
                neck_layer = 'necklines_' + neck;
                if (neck_open) {
                    neck_layer += '+button_close_' + button_close + '+open';
                } else {
                    neck_layer += '+number_' + neck_buttons + '+button_close_' + button_close;
                }
                array_push(images, {
                    'layer': 'shirt',
                    'src': neck_layer + '.png',
                    'zIndex': 1002,
                    'class': 'shirt',
                    'render': false
                });
                if (chest_pocket) {
                    pocket_layer = 'pockets_' + chest_pocket;
                    array_push(images, {
                        'layer': 'shirt',
                        'src': pocket_layer + '.png',
                        'zIndex': 1003,
                        'class': 'shirt',
                        'render': false
                    });
                }
                if (sleeves == 'short') {
                    sleeves_layer = 'sleeves_short';
                } else {
                    sleeves_layer = 'sleeves_long+';
                    if (inner_sleeve) {
                        sleeves_layer += 'inner_sleeve';
                    } else {
                        if (cuffs != '2_button' && cuffs != 'double_french') {
                            sleeves_layer += 'cuffs_classic';
                        } else {
                            sleeves_layer += 'cuffs_' + cuffs;
                        }
                    }
                }
                array_push(images, {
                    'layer': 'shirt',
                    'src': sleeves_layer + '.png',
                    'zIndex': 1004,
                    'class': 'shirt',
                    'render': false
                });
            } else {
                neck_layer = 'necklines_' + neck;
                neck_layer += '+number_' + neck_buttons + '+button_close_' + button_close;
                if (neck_open) {
                    neck_layer += '+open';
                }
                array_push(images, {
                    'layer': 'shirt',
                    'src': neck_layer + '.png',
                    'zIndex': 1005,
                    'class': 'shirt',
                    'render': false
                });
                if (config['shirt_chest_pocket_type'] > 0) {
                    pocket_layer = 'pockets_' + chest_pocket;
                    array_push(images, {
                        'layer': 'shirt',
                        'src': pocket_layer + '.png',
                        'zIndex': 1006,
                        'class': 'shirt',
                        'render': false
                    });
                }
                sleeve_left_layer = 'sleeves';
                sleeve_right_layer = 'sleeves';
                if (sleeves == 'short') {
                    sleeve_left_layer += '_short+left';
                    sleeve_right_layer += '_short+right';
                } else {
                    if (inner_sleeve) {
                        sleeve_left_layer += '_rolled_up+left+cuffs_style_' + inner;
                        sleeve_right_layer += '_rolled_up+right';
                    } else {
                        sleeve_left_layer += '_long+left+cuffs';
                        if (cuffs_back == 'rounded_double_french_cuff' || cuffs_back == 'squared_double_french_cuff') {
                            sleeve_left_layer += '_style_' + cuffs_back;
                        } else {
                            if (num_cuffs_buttons == 1) {
                                sleeve_left_layer += '_' + num_cuffs_buttons + '_button';
                            } else {
                                sleeve_left_layer += '_' + num_cuffs_buttons + '_buttons';
                            }
                        }
                        sleeve_right_layer += '_long+right+cuffs_style_' + cuffs_back;
                    }
                }
                array_push(images, {
                    'layer': 'shirt',
                    'src': sleeve_left_layer + '.png',
                    'zIndex': 5607,
                    'class': 'shirt',
                    'render': false
                });
                array_push(images, {
                    'layer': 'shirt',
                    'src': sleeve_right_layer + '.png',
                    'zIndex': 1000,
                    'class': 'shirt',
                    'render': false
                });
            }
            array_push(images, {'layer': 'shoes', 'src': 'zapatos.png', 'zIndex': 100, 'class': ''});
            if (view_detail == 'inside' && !preview) array_push(images, {
                'layer': 'pants',
                'src': 'encima.png',
                'zIndex': 5555,
                'class': 'man_pant',
                'render': false
            });
        } else if (current['view'] == 'back') {
            fit_layer = 'fit_' + fit;
            if (view_detail == 'outside') {
                fit_layer += '+bottom_cut_' + cut;
            }
            fit_layer += '+' + view_detail;
            array_push(images, {
                'layer': 'shirt',
                'src': fit_layer + '.png',
                'zIndex': 1001,
                'class': 'shirt',
                'render': false
            });
            if (pleats) {
                array_push(images, {
                    'layer': 'shirt',
                    'src': pleats + '.png',
                    'zIndex': 1002,
                    'class': 'shirt',
                    'render': false
                });
            }
            neck_layer = 'necklines';
            if (neck != 'mao') {
                if (neck_buttons == 1) neck_layer += '_' + neck_buttons + '_button'; else neck_layer += '_' + neck_buttons + '_buttons';
            } else {
                neck_layer += '_mao';
            }
            array_push(images, {
                'layer': 'shirt',
                'src': neck_layer + '.png',
                'zIndex': 1003,
                'class': 'shirt',
                'render': false
            });
            sleeves_layer = 'sleeves';
            if (sleeves == 'short') {
                sleeves_layer += '_short';
            } else {
                if (inner_sleeve) {
                    sleeves_layer += '_rolled_up+cuffs_style_' + inner;
                } else {
                    sleeves_layer += '_long+cuffs_style_' + cuffs_back;
                }
            }
            array_push(images, {
                'layer': 'shirt',
                'src': sleeves_layer + '.png',
                'zIndex': 1004,
                'class': 'shirt',
                'render': false
            });
            array_push(images, {
                'layer': 'shoes',
                'src': 'zapatos.png',
                'zIndex': 100,
                'class': '',
                'render': false
            });
            if (view_detail == 'inside' && !preview) array_push(images, {
                'layer': 'pants',
                'src': 'encima.png',
                'zIndex': 5555,
                'class': 'man_pant',
                'render': false
            });
        } else if (current['view'] == 'folded') {
            body_layer = 'body';
            body_layer += '+button_close_' + button_close;
            array_push(images, {
                'layer': 'shirt',
                'src': body_layer + '.png',
                'zIndex': 12000,
                'class': '',
                'render': false
            });
            neck_layer = 'necklines_' + neck;
            neck_layer += '+number_' + neck_buttons + '+button_close_' + button_close;
            array_push(images, {
                'layer': 'shirt',
                'src': neck_layer + '.png',
                'zIndex': 12002,
                'class': '',
                'render': false
            });
            if (config['shirt_chest_pocket_type'] > 0) {
                pocket_layer = 'pockets_' + chest_pocket;
                array_push(images, {
                    'layer': 'shirt',
                    'src': pocket_layer + '.png',
                    'zIndex': 13003,
                    'class': '',
                    'render': false
                });
            }
            sleeves_layer = 'sleeves';
            if (sleeves == 'short') {
                sleeves_layer += '_short';
            } else {
                sleeves_layer += '_long+cuffs_style_' + cuffs_back;
            }
            array_push(images, {
                'layer': 'shirt',
                'src': sleeves_layer + '.png',
                'zIndex': 12004,
                'class': '',
                'render': false
            });
            if (!empty(tuxeda)) {
                layer_tuxedo = 'pleats+cuff_' + num_cuffs_buttons + '_buttons+number_' + neck_buttons;
                array_push(images, {
                    'layer': 'shirt',
                    'src': layer_tuxedo + '.png',
                    'zIndex': 12010,
                    'class': '',
                    'render': false
                });
            }
            array_push(images, {
                'layer': 'sombra',
                'src': 'sombra.png',
                'zIndex': 10005,
                'class': '',
                'render': false
            });
            if (empty(is_backoffice) && !is_backoffice_php) {
                array_push(images, {
                    'layer': 'etiquetas',
                    'src': 'etiqueta.png',
                    'zIndex': 12005,
                    'class': '',
                    'render': false
                });
            }
            if (!empty(tuxeda)) {
                array_push(images, {
                    'layer': 'shirt',
                    'src': 'neck_contrast_full+necklines_' + neck + '+number_' + neck_buttons + '+button_close_standard' + '.png',
                    'zIndex': 12015,
                    'class': '',
                    'render': false
                });
            }
        }
        layer_ojales = 'ojales';
        layer_hilos = 'hilos';
        layer_cuff_ojales = 'ojales';
        layer_cuff_hilos = 'hilos';
        if (button_holes_threads_pos == 'all' && button_threads) {
            layer_hilos = 'hilos_extra';
            layer_cuff_hilos = 'hilos_extra';
        }
        if (button_holes_threads_pos == 'all' && button_holes) {
            layer_ojales = 'ojales_extra';
            layer_cuff_ojales = 'ojales_extra';
        }
        if (button_holes_threads_pos == 'cuff' && button_threads) {
            layer_cuff_hilos = 'hilos_extra';
        }
        if (button_holes_threads_pos == 'cuff' && button_holes) {
            layer_cuff_ojales = 'ojales_extra';
        }
        if (current['view'] == 'front') {
            if (button_close != 'hidden') {
                fit_obh_layer = 'fit_' + fit + '+button_close_' + button_close;
                if (view_detail == 'outside') {
                    fit_obh_layer += '+bottom_cut_' + cut;
                    fit_obh_layer += '+' + view_detail;
                } else {
                    fit_obh_layer += '_+' + view_detail;
                }
                if (print_layer_holes) array_push(images, {
                    'layer': layer_ojales,
                    'src': fit_obh_layer + '.png',
                    'zIndex': 5000,
                    'class': 'shirt'
                });
                array_push(images, {
                    'layer': 'botones',
                    'src': fit_obh_layer + '.png',
                    'zIndex': 5100,
                    'class': 'shirt'
                });
                if (print_layer_threads) array_push(images, {
                    'layer': layer_hilos,
                    'src': fit_obh_layer + '.png',
                    'zIndex': 5200,
                    'class': 'shirt'
                });
            }
            if (button_close == 'hidden' && neck_open) {
            } else {
                necklines_obh_layer = 'necklines_' + neck;
                if (neck_open) {
                    necklines_obh_layer += '+button_close_' + button_close + '+open';
                } else {
                    necklines_obh_layer += '+number_' + neck_buttons + '+button_close_' + button_close;
                }
                if (print_layer_holes) array_push(images, {
                    'layer': layer_ojales,
                    'src': necklines_obh_layer + '.png',
                    'zIndex': 5001,
                    'class': 'shirt'
                });
                array_push(images, {
                    'layer': 'botones',
                    'src': necklines_obh_layer + '.png',
                    'zIndex': 5101,
                    'class': 'shirt'
                });
                if (print_layer_threads) array_push(images, {
                    'layer': layer_hilos,
                    'src': necklines_obh_layer + '.png',
                    'zIndex': 5201,
                    'class': 'shirt'
                });
            }
            if (config['shirt_chest_pocket_type'] == 1 || config['shirt_chest_pocket_type'] == 3) {
                if (!print_layer_holes) array_push(images, {
                    'layer': layer_ojales,
                    'src': 'pockets_' + chest_pocket + '.png',
                    'zIndex': 5003,
                    'class': 'shirt'
                });
                array_push(images, {
                    'layer': 'botones',
                    'src': 'pockets_' + chest_pocket + '.png',
                    'zIndex': 5103,
                    'class': 'shirt'
                });
                if (print_layer_threads) array_push(images, {
                    'layer': layer_hilos,
                    'src': 'pockets_' + chest_pocket + '.png',
                    'zIndex': 5203,
                    'class': 'shirt'
                });
            }
        } else if (current['view'] == 'back' && sleeves == 'long') {
            sleeves_obh_layer = 'sleeves';
            if (sleeves == 'short') {
                sleeves_obh_layer += '_short';
            } else {
                if (inner_sleeve) {
                    sleeves_obh_layer += '_rolled_up+cuffs_style_' + inner;
                } else {
                    sleeves_obh_layer += '_long+cuffs_style_' + cuffs_back;
                }
            }
            if (print_layer_holes) array_push(images, {
                'layer': layer_cuff_ojales,
                'src': sleeves_obh_layer + '.png',
                'zIndex': 5001,
                'class': 'shirt'
            });
            array_push(images, {
                'layer': 'botones',
                'src': sleeves_obh_layer + '.png',
                'zIndex': 5101,
                'class': 'shirt'
            });
            if (print_layer_threads) array_push(images, {
                'layer': layer_cuff_hilos,
                'src': sleeves_obh_layer + '.png',
                'zIndex': 5201,
                'class': 'shirt'
            });
        } else if (current['view'] == 'side' && sleeves == 'long') {
            if (button_close != 'hidden') {
                fit_obh_layer = 'fit_' + fit + '+button_close_' + button_close;
                if (view_detail == 'outside') {
                    fit_obh_layer += '+bottom_cut_' + cut;
                }
                fit_obh_layer += '+' + view_detail;
                if (print_layer_holes) array_push(images, {
                    'layer': layer_ojales,
                    'src': fit_obh_layer + '.png',
                    'zIndex': 5002,
                    'class': 'shirt'
                });
                array_push(images, {
                    'layer': 'botones',
                    'src': fit_obh_layer + '.png',
                    'zIndex': 5102,
                    'class': 'shirt'
                });
                if (print_layer_threads) array_push(images, {
                    'layer': layer_hilos,
                    'src': fit_obh_layer + '.png',
                    'zIndex': 5202,
                    'class': 'shirt'
                });
            }
            neck_obh_layer = 'necklines_' + neck;
            neck_obh_layer += '+number_' + neck_buttons + '+button_close_' + button_close;
            if (neck_open) {
                neck_obh_layer += '+open';
            }
            if (print_layer_holes) array_push(images, {
                'layer': layer_ojales,
                'src': neck_obh_layer + '.png',
                'zIndex': 5003,
                'class': 'shirt'
            });
            array_push(images, {
                'layer': 'botones',
                'src': neck_obh_layer + '.png',
                'zIndex': 5103,
                'class': 'shirt'
            });
            if (print_layer_threads) array_push(images, {
                'layer': layer_hilos,
                'src': neck_obh_layer + '.png',
                'zIndex': 5203,
                'class': 'shirt'
            });
            if (config['shirt_chest_pocket_type'] == 1 || config['shirt_chest_pocket_type'] == 3) {
                pocket_obh_layer = 'pockets_' + chest_pocket;
                if (print_layer_holes) array_push(images, {
                    'layer': layer_ojales,
                    'src': pocket_obh_layer + '.png',
                    'zIndex': 5004,
                    'class': 'shirt'
                });
                array_push(images, {
                    'layer': 'botones',
                    'src': pocket_obh_layer + '.png',
                    'zIndex': 5104,
                    'class': 'shirt'
                });
                if (print_layer_threads) array_push(images, {
                    'layer': layer_hilos,
                    'src': pocket_obh_layer + '.png',
                    'zIndex': 5204,
                    'class': 'shirt'
                });
            }
            sleeve_right_obh_layer = 'sleeves';
            if (sleeves == 'long') {
                sleeve_right_obh_layer += '_long+right+cuffs_style_' + inner;
            }
            if (!inner_sleeve) {
                if (print_layer_holes) array_push(images, {
                    'layer': layer_cuff_ojales,
                    'src': sleeve_right_obh_layer + '.png',
                    'zIndex': 5005,
                    'class': 'shirt'
                });
                array_push(images, {
                    'layer': 'botones',
                    'src': sleeve_right_obh_layer + '.png',
                    'zIndex': 5105,
                    'class': 'shirt'
                });
                if (print_layer_threads) array_push(images, {
                    'layer': layer_cuff_hilos,
                    'src': sleeve_right_obh_layer + '.png',
                    'zIndex': 5205,
                    'class': 'shirt'
                });
            }
            sleeve_left_obh_layer = 'sleeves';
            sleeve_right_obh_layer = 'sleeves';
            if (sleeves == 'long') {
                if (!inner_sleeve) {
                    sleeve_left_obh_layer += '_long+left+cuffs_style_';
                    sleeve_right_obh_layer += '_long+right+cuffs_style_';
                    if (config['shirt_cuffs'] == 5 || config['shirt_cuffs'] == 6 || config['shirt_cuffs'] == 9 || config['shirt_cuffs'] == 10) {
                        sleeve_right_obh_layer += cuffs_back;
                        if (cuffs_back == 'rounded_double_french_cuff' || cuffs_back == 'squared_double_french_cuff') {
                            sleeve_left_obh_layer += cuffs_back;
                            array_push(images, {
                                'layer': 'gemelos',
                                'src': sleeve_left_obh_layer + '.png',
                                'zIndex': 5006,
                                'class': 'shirt'
                            });
                        }
                        array_push(images, {
                            'layer': 'gemelos',
                            'src': sleeve_right_obh_layer + '.png',
                            'zIndex': 5007,
                            'class': 'shirt'
                        });
                    }
                }
            }
        } else if (current['view'] == 'folded') {
            if (button_close != 'hidden') {
                body_obh_layer = 'body';
                body_obh_layer += '+button_close_' + button_close;
                if (print_layer_holes) array_push(images, {
                    'layer': layer_ojales,
                    'src': body_obh_layer + '.png',
                    'zIndex': 15000,
                    'class': ''
                });
                array_push(images, {
                    'layer': 'botones',
                    'src': body_obh_layer + '.png',
                    'zIndex': 15100,
                    'class': ''
                });
                if (print_layer_threads) array_push(images, {
                    'layer': layer_hilos,
                    'src': body_obh_layer + '.png',
                    'zIndex': 15200,
                    'class': ''
                });
            }
            neck_obh_layer = 'necklines_' + neck;
            neck_obh_layer += '+number_' + neck_buttons + '+button_close_' + button_close;
            if (print_layer_holes) array_push(images, {
                'layer': layer_ojales,
                'src': neck_obh_layer + '.png',
                'zIndex': 15001,
                'class': ''
            });
            array_push(images, {'layer': 'botones', 'src': neck_obh_layer + '.png', 'zIndex': 15101, 'class': ''});
            if (print_layer_threads) array_push(images, {
                'layer': layer_hilos,
                'src': neck_obh_layer + '.png',
                'zIndex': 15201,
                'class': ''
            });
            if (config['shirt_chest_pocket_type'] == 1 || config['shirt_chest_pocket_type'] == 3) {
                pocket_obh_layer = 'pockets_' + chest_pocket;
                if (print_layer_holes) array_push(images, {
                    'layer': layer_ojales,
                    'src': pocket_obh_layer + '.png',
                    'zIndex': 15002,
                    'class': ''
                });
                array_push(images, {
                    'layer': 'botones',
                    'src': pocket_obh_layer + '.png',
                    'zIndex': 15102,
                    'class': ''
                });
                if (print_layer_threads) array_push(images, {
                    'layer': layer_hilos,
                    'src': pocket_obh_layer + '.png',
                    'zIndex': 15202,
                    'class': ''
                });
            }
            if (sleeves == 'long') {
                if (config['shirt_cuffs'] != 5 && config['shirt_cuffs'] != 6 && config['shirt_cuffs'] != 9 && config['shirt_cuffs'] != 10) {
                    sleeves_obh_layer = 'sleeves';
                    if (sleeves == 'long') {
                        sleeves_obh_layer += '_long+cuffs_style_' + holes_threads;
                    }
                    if (print_layer_holes) array_push(images, {
                        'layer': layer_cuff_ojales,
                        'src': sleeves_obh_layer + '.png',
                        'zIndex': 15003,
                        'class': ''
                    });
                    array_push(images, {
                        'layer': 'botones',
                        'src': sleeves_obh_layer + '.png',
                        'zIndex': 15103,
                        'class': ''
                    });
                    if (print_layer_threads) array_push(images, {
                        'layer': layer_cuff_hilos,
                        'src': sleeves_obh_layer + '.png',
                        'zIndex': 15203,
                        'class': ''
                    });
                }
            }
        }
        if (cuff_fabric_id) {
            if (current['view'] == 'front') {
                layer_cuff_inner_fabric = 'cuff_contrast_inner+';
                layer_cuff_outer_fabric = 'cuff_contrast_outer+';
                if (cuff_fabric_pos == 'full') {
                    if (inner_sleeve) {
                        if (sleeves == 'long') {
                            layer_cuff_inner_fabric += 'sleeves_long+inner_sleeve';
                            array_push(images, {
                                'layer': 'cuffs_fabric',
                                'src': layer_cuff_inner_fabric + '.png',
                                'zIndex': 1500,
                                'class': 'shirt'
                            });
                        }
                    } else {
                        if (sleeves == 'long') {
                            layer_cuff_outer_fabric += 'sleeves_long+';
                            if (cuffs != '2_button' && cuffs != 'double_french') {
                                layer_cuff_outer_fabric += 'cuffs_classic';
                            } else {
                                layer_cuff_outer_fabric += 'cuffs_' + cuffs;
                            }
                        } else {
                            layer_cuff_outer_fabric += 'sleeves_short';
                        }
                        array_push(images, {
                            'layer': 'cuffs_fabric',
                            'src': layer_cuff_outer_fabric + '.png',
                            'zIndex': 1500,
                            'class': 'shirt'
                        });
                    }
                } else if (cuff_fabric_pos == 'inner') {
                    if (inner_sleeve) {
                        if (sleeves == 'long') {
                            layer_cuff_inner_fabric += 'sleeves_long+inner_sleeve';
                            array_push(images, {
                                'layer': 'cuffs_fabric',
                                'src': layer_cuff_inner_fabric + '.png',
                                'zIndex': 1500,
                                'class': 'shirt'
                            });
                        }
                    }
                } else if (cuff_fabric_pos == 'outer') {
                    if (!inner_sleeve) {
                        if (sleeves == 'long') {
                            layer_cuff_outer_fabric += 'sleeves_long+';
                            if (cuffs != '2_button' && cuffs != 'double_french') {
                                layer_cuff_outer_fabric += 'cuffs_classic';
                            } else {
                                layer_cuff_outer_fabric += 'cuffs_' + cuffs;
                            }
                        } else {
                            layer_cuff_outer_fabric += 'sleeves_short';
                        }
                        array_push(images, {
                            'layer': 'cuffs_fabric',
                            'src': layer_cuff_outer_fabric + '.png',
                            'zIndex': 1500,
                            'class': 'shirt'
                        });
                    }
                }
            } else if (current['view'] == 'back' && (cuff_fabric_pos == 'full' || cuff_fabric_pos == 'outer')) {
                layer_cuff_inner_fabric = 'cuff_contrast_inner+';
                layer_cuff_outer_fabric = 'cuff_contrast_outer+';
                if (sleeves == 'long') {
                    if (inner_sleeve) {
                        layer_cuff_outer_fabric += 'sleeves_rolled_up+cuffs_style_' + inner;
                    } else {
                        layer_cuff_outer_fabric += 'sleeves_long+cuffs_style_' + cuffs_back;
                    }
                    array_push(images, {
                        'layer': 'cuffs_fabric',
                        'src': layer_cuff_outer_fabric + '.png',
                        'zIndex': 1500,
                        'class': 'shirt'
                    });
                } else {
                    layer_cuff_outer_fabric += 'sleeves_short';
                    array_push(images, {
                        'layer': 'cuffs_fabric',
                        'src': layer_cuff_outer_fabric + '.png',
                        'zIndex': 1500,
                        'class': 'shirt'
                    });
                }
            } else if (current['view'] == 'side' && !empty(cuff_fabric_pos)) {
                layer_cuff_left_fabric = 'cuff_contrast_' + cuff_fabric_pos + '+';
                layer_cuff_right_fabric = 'cuff_contrast_' + cuff_fabric_pos + '+';
                layer_cuff_outer_fabric = 'cuff_contrast_outer+';
                if (sleeves == 'long') {
                    if (inner_sleeve) {
                        if (cuff_fabric_pos != 'outer') {
                            layer_cuff_left_fabric += 'sleeves_rolled_up+left+cuffs_style_' + inner;
                            layer_cuff_right_fabric += 'sleeves_rolled_up+right';
                        }
                    } else {
                        layer_cuff_left_fabric += 'sleeves_long+left+cuffs';
                        layer_cuff_right_fabric += 'sleeves_long+right';
                        if (cuffs_back == 'rounded_double_french_cuff' || cuffs_back == 'squared_double_french_cuff') {
                            layer_cuff_left_fabric += '_style_' + cuffs_back;
                        } else {
                            if (num_cuffs_buttons == 1) {
                                layer_cuff_left_fabric += '_' + num_cuffs_buttons + '_button';
                            } else {
                                layer_cuff_left_fabric += '_' + num_cuffs_buttons + '_buttons';
                            }
                        }
                        layer_cuff_right_fabric += '+cuffs_style_' + cuffs_back;
                    }
                    if (inner_sleeve) {
                        zindex_right = 1001;
                    } else {
                        zindex_right = 1500;
                    }
                    if (cuff_fabric_pos != 'inner') array_push(images, {
                        'layer': 'cuffs_fabric',
                        'src': layer_cuff_left_fabric + '.png',
                        'zIndex': 5800,
                        'class': 'shirt'
                    });
                    array_push(images, {
                        'layer': 'cuffs_fabric',
                        'src': layer_cuff_right_fabric + '.png',
                        'zIndex': zindex_right,
                        'class': 'shirt'
                    });
                } else {
                    layer_cuff_outer_fabric_left = layer_cuff_outer_fabric + 'sleeves_short+left';
                    array_push(images, {
                        'layer': 'cuffs_fabric',
                        'src': layer_cuff_outer_fabric_left + '.png',
                        'zIndex': 6600,
                        'class': 'shirt'
                    });
                    layer_cuff_outer_fabric_right = layer_cuff_outer_fabric + 'sleeves_short+right';
                    array_push(images, {
                        'layer': 'cuffs_fabric',
                        'src': layer_cuff_outer_fabric_right + '.png',
                        'zIndex': 6600,
                        'class': 'shirt'
                    });
                }
            } else if (current['view'] == 'folded' && !empty(cuff_fabric_pos)) {
                layer_cuff_fabric = 'cuff_contrast_' + cuff_fabric_pos;
                layer_cuff_outer_fabric = 'cuff_contrast_outer+';
                if (sleeves == 'long') {
                    if (inner == 'squared' && cuff_fabric_pos == 'inner') {
                    } else {
                        layer_cuff_fabric += '+sleeves_long+cuffs_style_' + cuffs_back;
                        array_push(images, {
                            'layer': 'cuffs_fabric',
                            'src': layer_cuff_fabric + '.png',
                            'zIndex': 13500,
                            'class': ''
                        });
                    }
                } else {
                    layer_cuff_outer_fabric += 'sleeves_short';
                    array_push(images, {
                        'layer': 'cuffs_fabric',
                        'src': layer_cuff_outer_fabric + '.png',
                        'zIndex': 13500,
                        'class': ''
                    });
                }
            }
        }
        if (neck_fabric_id && neck_fabric_pos) {
            if (neck == 'tuxedo') {
                if (current['view'] == 'front') {
                    layer_neck_fabric = 'neck_contrast_' + neck_fabric_pos + '+necklines_tuxedo';
                    if (neck_open) layer_neck_fabric += '+button_close_standard+open'; else layer_neck_fabric += '+number_' + neck_buttons + '+button_close_standard';
                    array_push(images, {
                        'layer': 'neck_fabric',
                        'src': layer_neck_fabric + '.png',
                        'zIndex': 1600,
                        'class': 'shirt'
                    });
                } else if (current['view'] == 'back') {
                    if (neck_fabric_pos == 'outer') {
                        layer_neck_fabric = 'neck_contrast_outer+necklines_' + neck_buttons + '_button';
                        array_push(images, {
                            'layer': 'neck_fabric',
                            'src': layer_neck_fabric + '.png',
                            'zIndex': 1600,
                            'class': 'shirt'
                        });
                    }
                } else if (current['view'] == 'side') {
                    layer_neck_fabric = 'neck_contrast_' + neck_fabric_pos + '+necklines_tuxedo+number_' + neck_buttons + '+button_close_standard';
                    if (neck_open) layer_neck_fabric += '+open';
                    array_push(images, {
                        'layer': 'neck_fabric',
                        'src': layer_neck_fabric + '.png',
                        'zIndex': 1600,
                        'class': 'shirt'
                    });
                } else if (current['view'] == 'folded') {
                    layer_neck_fabric = 'neck_contrast_' + neck_fabric_pos + '+necklines_tuxedo+number_' + neck_buttons + '+button_close_standard';
                    array_push(images, {
                        'layer': 'neck_fabric',
                        'src': layer_neck_fabric + '.png',
                        'zIndex': 13600,
                        'class': ''
                    });
                }
            } else {
                if (current['view'] == 'front') {
                    if (neck_fabric_pos == 'inner') {
                        layer_neck_fabric = 'neck_contrast_' + neck_fabric_pos + '+necklines_';
                        if (neck_open) {
                            layer_neck_fabric += neck + '+button_close_standard+open';
                            array_push(images, {
                                'layer': 'neck_fabric',
                                'src': layer_neck_fabric + '.png',
                                'zIndex': 1600,
                                'class': 'shirt'
                            });
                        }
                    } else {
                        layer_neck_fabric = 'neck_contrast_' + neck_fabric_pos + '+necklines_' + neck;
                        if (neck_open) {
                            layer_neck_fabric += '+button_close_standard+open';
                        } else {
                            layer_neck_fabric += '+number_' + neck_buttons + '+button_close_standard';
                        }
                        array_push(images, {
                            'layer': 'neck_fabric',
                            'src': layer_neck_fabric + '.png',
                            'zIndex': 1600,
                            'class': 'shirt'
                        });
                    }
                } else if (current['view'] == 'back') {
                    if (neck_fabric_pos == 'outer' || neck_fabric_pos == 'full') {
                        layer_neck_fabric = 'neck_contrast_outer+necklines_';
                        if (neck != 'mao') {
                            if (neck_buttons == 1) layer_neck_fabric += neck_buttons + '_button'; else layer_neck_fabric += neck_buttons + '_buttons';
                        } else {
                            layer_neck_fabric += 'mao';
                        }
                        array_push(images, {
                            'layer': 'neck_fabric',
                            'src': layer_neck_fabric + '.png',
                            'zIndex': 1600,
                            'class': 'shirt'
                        });
                    }
                } else if (current['view'] == 'side') {
                    layer_neck_fabric = 'neck_contrast_' + neck_fabric_pos + '+necklines_';
                    layer_neck_fabric += neck + '+number_' + neck_buttons + '+button_close_standard';
                    if (neck_open) {
                        layer_neck_fabric += '+open';
                    }
                    if (neck_fabric_pos == 'inner' && !neck_open) {
                    } else {
                        array_push(images, {
                            'layer': 'neck_fabric',
                            'src': layer_neck_fabric + '.png',
                            'zIndex': 1600,
                            'class': 'shirt'
                        });
                    }
                } else if (current['view'] == 'folded') {
                    layer_neck_fabric = 'neck_contrast_' + neck_fabric_pos + '+necklines_';
                    layer_neck_fabric += neck + '+number_' + neck_buttons + '+button_close_standard';
                    array_push(images, {
                        'layer': 'neck_fabric',
                        'src': layer_neck_fabric + '.png',
                        'zIndex': 13600,
                        'class': ''
                    });
                }
            }
        }
        if (patches_id) {
            if (current['view'] == 'back') {
                array_push(images, {
                    'layer': 'patches_fabric',
                    'src': 'contrast+elbow_patches.png',
                    'zIndex': 1600,
                    'class': 'shirt'
                });
            } else if (current['view'] == 'side') {
                array_push(images, {
                    'layer': 'patches_fabric',
                    'src': 'elbow_patches.png',
                    'zIndex': 1600,
                    'class': 'shirt'
                });
            }
        }
        if (current['view'] == 'front') {
            layer_shadow_sleeve = 'sleeves_';
            if (sleeves == 'short') {
                layer_shadow_sleeve += 'short';
            } else {
                layer_shadow_sleeve += 'long+';
                if (inner_sleeve) {
                    layer_shadow_sleeve += 'inner_sleeve';
                } else {
                    if (config['shirt_cuffs'] == 10) layer_shadow_sleeve += 'cuffs_double_french'; else layer_shadow_sleeve += 'cuffs_classic';
                }
            }
            array_push(images, {
                'layer': 'sombra',
                'src': layer_shadow_sleeve + '.png',
                'zIndex': 1000,
                'class': 'shirt'
            });
            layer_shadow_neckline = 'necklines';
            if (neck_open) {
                if (neck == 'buttons' || neck == 'mao' || neck == 'tuxedo') {
                    if (neck == 'buttons') {
                        if (button_close == 'french') layer_shadow_neckline += '_' + neck + '+button_close_french+open'; else layer_shadow_neckline += '_' + neck + '+open';
                    }
                    if (neck == 'mao') {
                        if (button_close == 'hidden') layer_shadow_neckline += '_' + neck + '+button_close_hidden+open'; else layer_shadow_neckline += '_' + neck + '+open';
                    }
                    if (neck == 'tuxedo') {
                        if (button_close == 'hidden') layer_shadow_neckline += '_' + neck + '+button_close_hidden+open'; else layer_shadow_neckline += '_' + neck + '+open';
                    }
                } else {
                    layer_shadow_neckline += '+open';
                }
            } else {
                if (neck == 'buttons' || neck == 'classic_low' || neck == 'mao' || neck == 'pin' || neck == 'tuxedo') {
                    layer_shadow_neckline += '_' + neck + '+number_' + neck_buttons;
                } else {
                    layer_shadow_neckline += '+number_' + neck_buttons;
                }
            }
            array_push(images, {
                'layer': 'sombra',
                'src': layer_shadow_neckline + '.png',
                'zIndex': 1000,
                'class': 'shirt'
            });
            if (view_detail == 'outside') {
                layer_shadow_fit = 'fit_' + fit + '+bottom_cut_' + cut + '+outside';
                array_push(images, {
                    'layer': 'sombra',
                    'src': layer_shadow_fit + '.png',
                    'zIndex': 1000,
                    'class': 'shirt'
                });
            }
        } else if (current['view'] == 'side') {
            layer_shadow_sleeve = 'sleeves_';
            if (inner_sleeve) {
                layer_shadow_sleeve += 'rolled_up';
                array_push(images, {
                    'layer': 'sombra',
                    'src': layer_shadow_sleeve + '.png',
                    'zIndex': 1000,
                    'class': 'shirt'
                });
            } else if (sleeves == 'short') {
                layer_shadow_sleeve += 'short';
                array_push(images, {
                    'layer': 'sombra',
                    'src': layer_shadow_sleeve + '.png',
                    'zIndex': 1000,
                    'class': 'shirt'
                });
            } else {
                layer_shadow_sleeve_left = layer_shadow_sleeve + 'long+left+cuffs';
                layer_shadow_sleeve_right = layer_shadow_sleeve + 'long+right+cuffs_style';
                if (config['shirt_cuffs'] == 6 || config['shirt_cuffs'] == 10) layer_shadow_sleeve_right += '_double_french_cuff'; else layer_shadow_sleeve_right += '_' + inner;
                array_push(images, {
                    'layer': 'sombra',
                    'src': layer_shadow_sleeve_left + '.png',
                    'zIndex': 1000,
                    'class': 'shirt'
                });
                array_push(images, {
                    'layer': 'sombra',
                    'src': layer_shadow_sleeve_right + '.png',
                    'zIndex': 1000,
                    'class': 'shirt'
                });
            }
            layer_shadow_neckline = 'necklines';
            if (neck == 'classic_low') {
                if (neck_open) {
                    layer_shadow_neckline += '+number_' + neck_buttons + '+button_close+open';
                } else {
                    layer_shadow_neckline += '_classic_low+number_' + neck_buttons + '+button_close';
                }
            } else if (neck == 'classic') {
                if (neck_buttons == 2 && neck_open) {
                    layer_shadow_neckline += '_classic+number_2+button_close+open';
                } else {
                    layer_shadow_neckline += '+number_' + neck_buttons + '+button_close';
                    if (neck_open) layer_shadow_neckline += '+open';
                }
            } else if (neck == 'lady') {
                if (neck_buttons == 2 && neck_open) {
                    layer_shadow_neckline += '_lady+number_2+button_close+open';
                } else {
                    layer_shadow_neckline += '+number_' + neck_buttons + '+button_close';
                    if (neck_open) layer_shadow_neckline += '+open';
                }
            } else if (neck == 'mao') {
                layer_shadow_neckline += '_mao+number_' + neck_buttons + '+button_close';
                if (neck_open) layer_shadow_neckline += '+open';
            } else if (neck == 'open') {
                if (neck_buttons == 2 && neck_open) {
                    layer_shadow_neckline += '_open+number_2+button_close+open';
                } else {
                    layer_shadow_neckline += '+number_' + neck_buttons + '+button_close';
                    if (neck_open) layer_shadow_neckline += '+open';
                }
            } else if (neck = 'pin') {
                if (neck_buttons == 1) {
                    layer_shadow_neckline += '_pin+number_1+button_close';
                    if (neck_open) layer_shadow_neckline += '+open';
                } else {
                    layer_shadow_neckline += '+number_' + neck_buttons + '+button_close';
                }
            } else if (neck = 'pin') {
                if (neck_buttons == 1) {
                    layer_shadow_neckline += '_pin+number_1+button_close';
                    if (neck_open) layer_shadow_neckline += '+open';
                } else {
                    layer_shadow_neckline += '+number_' + neck_buttons + '+button_close';
                }
            } else if (neck == 'tuxedo') {
                layer_shadow_neckline += '_tuxedo+number_' + neck_buttons + '+button_close';
                if (neck_open) layer_shadow_neckline += '+open';
            } else {
                layer_shadow_neckline += '+number_' + neck_buttons + '+button_close';
                if (neck_open) {
                    layer_shadow_neckline += '+open';
                }
            }
            array_push(images, {
                'layer': 'sombra',
                'src': layer_shadow_neckline + '.png',
                'zIndex': 1000,
                'class': 'shirt'
            });
            if (view_detail == 'outside') {
                layer_shadow_fit = 'fit+bottom_cut_' + cut + '+outside';
                array_push(images, {
                    'layer': 'sombra',
                    'src': layer_shadow_fit + '.png',
                    'zIndex': 1000,
                    'class': 'shirt'
                });
            }
        } else if (current['view'] == 'back') {
            layer_sleeves = 'sleeves';
            if (sleeves == 'short') {
                layer_sleeves += '_short';
            } else if (inner_sleeve) {
                layer_sleeves += '_rolled_up';
            } else {
                layer_sleeves += '_long+cuffs_style';
                if (config['shirt_cuffs'] == 9) layer_sleeves += '_rounded_french_cuff'; else if (config['shirt_cuffs'] == 5) layer_sleeves += '_squared_french_cuff'; else layer_sleeves += '_' + inner;
            }
            array_push(images, {
                'layer': 'sombra',
                'src': layer_sleeves + '.png',
                'zIndex': 1000,
                'class': 'shirt'
            });
            layer_necklines = 'necklines';
            if (neck == 'mao') {
                layer_necklines += '_mao';
            } else {
                if (neck_buttons == 1) layer_necklines += '_1_button';
                if (neck_buttons == 2) layer_necklines += '_2_buttons';
            }
            array_push(images, {
                'layer': 'sombra',
                'src': layer_necklines + '.png',
                'zIndex': 1000,
                'class': 'shirt'
            });
            layer_fit = 'fit';
            if (view_detail == 'inside') {
                layer_fit += '+inside';
                array_push(images, {
                    'layer': 'sombra',
                    'src': layer_fit + '.png',
                    'zIndex': 1000,
                    'class': 'shirt'
                });
            } else {
                if (view_detail == 'outside') {
                    layer_fit += '_' + fit + '+bottom_cut_' + cut + '+outside';
                    array_push(images, {
                        'layer': 'sombra',
                        'src': layer_fit + '.png',
                        'zIndex': 1000,
                        'class': 'shirt'
                    });
                }
            }
        }
        if (return_in_array) {
            return this.parseImagesInArray(images, current, size);
        } else {
            return this.parseImages(images, current, size);
        }
    };


    garment.initGarment();
});

