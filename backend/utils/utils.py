def commaSeperate(list):
    if len(list) == 1:
        return list[0]
    if len(list) == 2:
        return f'{list[0]} and {list[1]}'
    return ', '.join(list[:-1]) + ', and ' + list[-1]

def getProfile(profile):
    with open('profile_template.txt', 'r') as f:
        template = f.read()
    template = template.split('\n')
    remove = set()
    for i, (k, v) in enumerate(profile.items()):
        if not v:
            remove.add(i)
        else:    
            if k == 'diets':
                template[i] = template[i].replace('$DIETS$', commaSeperate(v))
            else:
                template[i] = template[i].replace(f'${k.upper()}$', v)
    template = [template[i] for i in range(len(template)) if i not in remove]
    return ' '.join(template)